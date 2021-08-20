var canvas = document.getElementById('BrickHunter');
var context = canvas.getContext('2d');
var brickWidth = 30;
var grid = [];
var wallOffset = 50;

function clearCanvas() {
    context.clearRect(0, 0, canvas.width, canvas.height);
}

var gameColor = ['red', 'yellow', 'blue', 'green', 'purple', 'orange'];
var weaponColor = ['red', 'yellow', 'blue', 'green', 'purple', 'orange'];
function randomColor() {
    return gameColor[Math.floor(Math.random() * gameColor.length)];
}
function randomWeaponColor() {
    return weaponColor[Math.floor(Math.random() * weaponColor.length)];
}
