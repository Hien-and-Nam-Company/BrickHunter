var canvas = document.getElementById('BrickHunter');
var context = canvas.getContext('2d');
var brickSide = 30;
var wall = [];

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
