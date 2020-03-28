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
var magazine = []; // magazine = băng đạn
var index = 0;
magazine[index] = new Bullet();

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
        magazine[index].getReadyShoot();
        weapon.color = randomColor();
        // index++;
        // magazine[index] = new Bullet();
    }
})

function collisionBulletBrick() {
    for (var i = 0; i < cols; i++) {
        for (var j = 0; j < rows; j++) {
            if (!wall[i][j].isBroken && wall[i][j].x + brickSide > magazine[index].x - magazine[index].r
                && wall[i][j].y < magazine[index].y && wall[i][j].y + brickSide > magazine[index].y) {
                if (wall[i][j].color == magazine[index].color) {
                    // magazine[index].readyShot();
                    wall[i][j].isBroken = true;
                } else {
                    // magazine[index].readyShot();
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
    magazine[index].draw();
    collisionBulletBrick();
    requestAnimationFrame(draw);
}

draw();