var canvas = document.getElementById('game');
var context = canvas.getContext('2d');

var gameColor = ['red', 'yellow', 'blue', 'green', 'violet', 'orange'];
function randomColor() {
    return gameColor[Math.floor(Math.random() * gameColor.length)];
}

var cols = 7;
var rows = 15;
var brickSide = 30;
var wall = [];

function setupAndDrawWall() {
    // Setup wall
    for (var i = 0; i < cols; i++) {
        wall[i] = [];
        for (var j = 0; j < rows; j++) {
            var x = i * 30;
            var y = j * 30 + 50;
            var color = randomColor();
            wall[i][j] = new Brick(x, y, color);
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