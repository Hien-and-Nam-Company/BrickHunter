var canvas = document.getElementById('BrickHunter');
var context = canvas.getContext('2d');

function clearCanvas() {
    context.clearRect(0, 0, canvas.width, canvas.height);
}

var gameColor = ['red', 'yellow', 'blue', 'green', 'violet', 'orange'];
function randomColor() {
    return gameColor[Math.floor(Math.random() * gameColor.length)];
}

var cols = 7;
var rows = 14;
var brickSide = 30;
var wallOffset = 50;