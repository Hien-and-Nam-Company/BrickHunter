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

var bullet = {
    x: weapon.x + 10,
    y: weapon.y + weapon.height / 2,
    dx: 0,
    r: 10,
    speed: 10,
    color: weapon.color,
    canShot: true,
}

function drawBullet(x, y) {
    context.beginPath();
    context.arc(x + bullet.dx, y, bullet.r, 0, Math.PI * 2);
    context.stroke();
    context.fillStyle = bullet.color;
    context.fill();
    context.closePath();

    bullet.x = x + bullet.dx;
    bullet.y = y;
}

document.addEventListener("keydown", function (event) {
    if (event.keyCode == 38) {
        weapon.moveUp();
    }
    if (event.keyCode == 40) {
        weapon.moveDown();
    }
})

document.addEventListener("keyup", function (event) {
    if (event.keyCode == 37 && bullet.canShot) { // space keyCode: 32
        bullet.canShot = false;
        bullet.color = weapon.color;
        weapon.color = randomColor();
        drawBullet(weapon.x + 10, weapon.y + weapon.height / 2);
    }
})


function moveBullet() {
    if (!bullet.canShot) {
        bullet.x -= bullet.speed;
        drawBullet(bullet.x, bullet.y);
    }
}

function collisionBulletBrick() {
    for (var i = 0; i < cols; i++) {
        for (var j = 0; j < rows; j++) {
            if (!wall[i][j].isBroken && wall[i][j].x + brickSide > bullet.x - bullet.r
                && wall[i][j].y < bullet.y && wall[i][j].y + brickSide > bullet.y) {
                if (wall[i][j].color == bullet.color) {
                    bullet.canShot = true;
                    wall[i][j].isBroken = true;
                } else {
                    bullet.canShot = true;
                }

            }
        }
    }
}

function setupWall() {
    for (var i = 0; i < cols; i++) {
        wall[i] = [];
        for (var j = 0; j < rows; j++) {
            var x = i * brickSide;
            var y = j * brickSide + wallOffset;
            var color = randomColor();
            var isBroken = false;
            wall[i][j] = new Brick(x, y, i, j, color);
        }
    }
}

function drawWall() {
    for (var i = 0; i < cols; i++) {
        for (var j = 0; j < rows; j++) {
            if (!wall[i][j].isBroken) {
                context.beginPath();
                context.rect(wall[i][j].x, wall[i][j].y, brickSide, brickSide);
                context.stroke();
                context.fillStyle = wall[i][j].color;
                context.fill();
                context.closePath();
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
    moveBullet();
    collisionBulletBrick();
    requestAnimationFrame(draw);
}

draw();