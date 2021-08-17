var brickSide = 30;
var wall = [];
var weapon = new Weapon();
// var bullets = new Array();
var bullet = new Bullet();

document.addEventListener("keyup", function (event) {
    if (event.keyCode == 37) {
        bullet.getReady();
        bullet.fire();
        weapon.color = randomWeaponColor();
    }
})

document.addEventListener("keydown", function (event) {
    if (event.keyCode == 38) {
        weapon.moveUp();
    }
    if (event.keyCode == 40) {
        weapon.moveDown();
    }
})

function draw() {
    weapon.draw();
    drawWall();
    bullet.draw();
}

function update() {
    bullet.update();
    updateWall();
    handleBulletAndWall();
}

function loop() {
    clearCanvas();
    update();
    draw();
    requestAnimationFrame(loop);
}

prescribeWall();
loop();
