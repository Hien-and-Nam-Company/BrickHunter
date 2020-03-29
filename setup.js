var canvas = document.getElementById('BrickHunter');
var context = canvas.getContext('2d');

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

document.addEventListener("keydown", function (event) {
    if (event.keyCode == 38) {
        weapon.moveUp();
    }
    if (event.keyCode == 40) {
        weapon.moveDown();
    }
})