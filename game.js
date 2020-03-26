var canvas = document.getElementById('game');
var context = canvas.getContext('2d');
var sound = document.getElementById('sound');

var isGameOver = false;
var isGameWin = false;
var score = 0;
var weapons = 10;
var isStart = true;
var soundFlag = false;

var speedArray = [-5, -4, 4, 5];
var gameColor = ['red', 'yellow', 'blue', 'green', 'violet', 'orange', 'pink', 'black', "brown"];

var bullet = {
    side: 30,
    r: 15,
    x: canvas.width - 30 + 15,
    y: canvas.height - 30 + 15,
    s: 2,
    isMoveLeft: false,
    isMoveRight: false,
    isMoveUp: false,
    isMoveDown: false,
}

//Bricks 2*offset + col*bricks.side + (col-1)*margin
var bricks = {
    side: 30,
    col: 7,
    row: 15,
    offset: 0,
    margin: 0,
};

var brickList = [];
function setUpBrickList(list){
    for (var i = 0; i < bricks.row; i++) {
        for (var j = 0; j < bricks.col; j++) {
            brickList.push({
                x: j * (bricks.side + bricks.margin) + bricks.offset,
                y: i * (bricks.side + bricks.margin) + bricks.offset + 50,
                isBroken: false,
                color: gameColor[Math.floor(Math.random() * gameColor.length)]
            });
        }
    }
}
setUpBrickList(brickList);

var maxScore = bricks.col * bricks.row;

function drawBricks() {
    brickList.forEach(function (yam) {
        if (!yam.isBroken) {
            context.beginPath();
            context.rect(yam.x, yam.y, bricks.side, bricks.side);
            context.stroke();
            context.fillStyle = yam.color;
            context.fill();
            context.closePath();
        }
    });
}
function clearCanvas() {
    context.clearRect(0, 0, canvas.width, canvas.height);
}

function clearSomething(){
    context.clearRect(211, 49, canvas.width, canvas.height);
}

document.addEventListener("keyup", function (event) {
    if (event.key == "ArrowUp") {
        clearSomething();
        bullet.y -= 30;
        drawBullet();
    } else if (event.key == "ArrowDown") {
        clearSomething();
        bullet.y += 30;
        drawBullet();
    }
    if (event.key == "ArrowLeft") {
        clearSomething();
        bullet.x -= 30;
        drawBullet();
    } else if (event.key == "ArrowRight") {
        clearSomething();
        bullet.x += 30;
        drawBullet();
    }
})

var bulletColor = gameColor[Math.floor(Math.random() * gameColor.length)];

function drawBullet() {
    context.beginPath();
    context.arc(bullet.x, bullet.y, bullet.r, 0, Math.PI * 2);
    // context.rect(bullet.x, bullet.y, bullet.side, bullet.side);
    context.stroke();
    context.fillStyle = bulletColor;
    context.fill();
    context.closePath();
}

function drawScore() {
    context.beginPath();
    context.font = "30px Comic Sans MS";
    context.fillStyle = 'black';
    context.fillText("Score: " + score, 10, 30);
    context.fillText("Weapons: " + weapons, 210, 30);
    context.closePath();
}

function drawIntroduction() {
    if (isStart && weapons == 3) {
        context.beginPath();
        context.font = "20px Comic Sans MS";
        context.fillStyle = 'black';
        // context.fillText("to control the bullet!", 35, 250);
        context.fillText("Made by Yam and Nam", 170, 50);
        context.closePath();
    }
}

function draw() {
    if (!isGameOver && !isGameWin) {
        clearCanvas();
        drawBullet();
        drawBricks();
        drawScore();
        drawIntroduction();
        moveBullet();
        requestAnimationFrame(draw);
    }
}

draw();