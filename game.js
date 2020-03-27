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

function drawWall(){
    for(var i = 0; i < cols; i++){
        for(var j = 0; j < rows; j++){
            context.beginPath();
                context.rect(wall[i][j].x, wall[i][j].y, brickSide, brickSide);
                context.stroke();
                context.fillStyle = wall[i][j].color;
                context.fill();
                context.closePath();
        }
    }
}

setupWall();

function draw(){  
    drawWall();

    requestAnimationFrame(draw);
}

draw();