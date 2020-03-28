var canvas = document.getElementById('game');
var context = canvas.getContext('2d');

var gameColor = ['red', 'yellow', 'blue', 'green', 'violet', 'orange'];
function randomColor() {
    return gameColor[Math.floor(Math.random() * gameColor.length)];
}

var cols = 7;
var rows = 14;
var brickSide = 30;
var wallOffset = 50;
var wall = [];

var weapon = new Weapon();
//create a array of bullet
var bullet = new Bullet();

document.addEventListener("keydown", function (event) {
    if (event.keyCode == 38) {
        weapon.moveUp();
    }
    if (event.keyCode == 40) {
        weapon.moveDown();
    }
})

document.addEventListener("keyup", function (event) {
    if (event.keyCode == 37) { // arrow left: 37;   space keyCode: 32
        bullet.getReadyShoot(weapon);
        weapon.color = randomColor();
        //create new bullet by somehow
    }
})

function collisionBulletBrick() {
    for (var i = 0; i < cols; i++) {
        for (var j = 0; j < rows; j++) {
            if (!wall[i][j].isBroken && wall[i][j].x + brickSide > bullet.x - bullet.r
                && wall[i][j].y < bullet.y && wall[i][j].y + brickSide > bullet.y) {
                if (wall[i][j].color == bullet.color) {
                    // bullet.readyShot();
                    wall[i][j].isBroken = true;
                } else {
                    // bullet.readyShot();
                }

            }
        }
    }
}

function clearCanvas() {
    context.clearRect(0, 0, canvas.width, canvas.height);
}

setupWall();

function draw() {
    clearCanvas();
    drawWall();
    weapon.draw();
    bullet.draw();
    collisionBulletBrick();
    requestAnimationFrame(draw);
}

draw();