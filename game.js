var brickSide = 30;
var wall = [];
var weapon = new Weapon();
var bullet = new Bullet();

document.addEventListener("keyup", function (event) {
    if (event.keyCode == 37) {
        bullet.getReady();
        bullet.fire();
        weapon.color = randomWeaponColor();
    }
})

function draw() {
    weapon.draw();
    wallDraw();
    bullet.draw();
}

function update() {
    bullet.update();
    wallUpdate();
    handleBulletAndWall();
}

function loop() {
    clearCanvas();
    update();
    draw();
    requestAnimationFrame(loop);
}

wallSetup();
loop();