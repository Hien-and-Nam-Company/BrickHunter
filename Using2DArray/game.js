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

function setupAndDrawWall() {
    // Setup wall
    for (var i = 0; i < cols; i++) {
        wall[i] = [];
        for (var j = 0; j < rows; j++) {
            var x = i * brickSide;
            var y = j * brickSide + wallOffset;
            var color = randomColor();
            wall[i][j] = new Brick(x, y, i, j, color);
    // Draw wall
            context.beginPath();
            context.rect(wall[i][j].x, wall[i][j].y, brickSide, brickSide);
            context.stroke();
            context.fillStyle = wall[i][j].color;
            context.fill();
            context.closePath();
        }
    }
}

setupAndDrawWall();
console.log(wall[2][5].x);
console.log(wall[4][9].name);
console.log(wall[6][14].name);