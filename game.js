var brickSide = 30;
var wall = [];
var weapon = new Weapon();
// var bullets = new Array();

var ammunition = new Array();
ammunition.push(new Bullet());
var bullet = ammunition[0];

document.addEventListener("keyup", function (event) {
    if (event.keyCode == 37) {
        bullet.fire();
        // ammunition.push(new Bullet();

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

function updateBullet() {

}


function loop() {
    clearCanvas();
    update();
    draw();
    requestAnimationFrame(loop);
}

prescribeWall();
loop();
