var canvas = document.getElementById('game');
var context = canvas.getContext('2d');

var gameColor = ['red', 'yellow', 'blue', 'green', 'violet', 'orange'];
function randomColor() {
    return gameColor[Math.floor(Math.random() * gameColor.length)];
}

var cols = 7;
var rows = 15;
var brickSide = 30;
var wallOffset = 50;
var wall = [];

var weapon = {
    width: 60,
    height: 90,
    x: canvas.width - 60,  
    y: canvas.height - 90, 
    speed: 5,  
    isUp: false,
    isDown: false,
    color: 'black',
}

function drawWeapon() {
    context.beginPath();
    context.rect(weapon.x + weapon.width/2, weapon.y, weapon.width/2, weapon.height);
    context.rect(weapon.x, weapon.y + weapon.height/3, weapon.width/2, weapon.height/3);
    context.stroke();
    context.fillStyle = weapon.color;
    context.fill();
    context.closePath();
}

document.addEventListener("keydown", function(event){
    // if(event.keyCode == 32){

    // }
    if(event.keyCode == 38){
        weapon.isUp = true;
    } else if(event.keyCode == 40){
        weapon.isDown = true;
    }
})

document.addEventListener("keyup", function(event){
    if(event.keyCode == 38){
        weapon.isUp = false;
    } else if(event.keyCode == 40){
        weapon.isDown = false;
    }
})


function moveWeapon(){
    if(weapon.isUp && weapon.y >= wallOffset + weapon.speed - weapon.height/3){
        weapon.y -= weapon.speed;
    } else if(weapon.isDown && weapon.y + weapon.height <= canvas.height - weapon.speed + weapon.height/3){
        weapon.y += weapon.speed;
    }
}

function setupWall() {
    for (var i = 0; i < cols; i++) {
        wall[i] = [];
        for (var j = 0; j < rows; j++) {
            var x = i * brickSide;
            var y = j * brickSide + wallOffset;
            var color = randomColor();
            wall[i][j] = new Brick(x, y, i, j, color);
        }
    }
}

function drawWall() {
    for (var i = 0; i < cols; i++) {
        for (var j = 0; j < rows; j++) {
            context.beginPath();
            context.rect(wall[i][j].x, wall[i][j].y, brickSide, brickSide);
            context.stroke();
            context.fillStyle = wall[i][j].color;
            context.fill();
            context.closePath();
        }
    }
}

function clearCanvas(){
    context.clearRect(0, 0, canvas.width, canvas.height);
}

setupWall();

function draw() {
    clearCanvas();
    drawWall();
    drawWeapon();
    moveWeapon();

    requestAnimationFrame(draw);
}

draw();