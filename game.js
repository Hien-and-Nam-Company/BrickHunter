var brickSide = 30;
var wall = [];
var weapon = new Weapon();
var ammunition = new Array();
ammunition.push(new Bullet());
var bullet = ammunition[0];

document.addEventListener("keyup", function (event) {
    if (event.keyCode == 37) {
        ammunition.push(new Bullet());
        // for (let index = ammunition.length - 1; index > -1; -- index) {
        //     ammunition[index].fire();
        // }
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

function update() {
    updateAmmunition();
    updateWall();
    handleBulletAndWall();
}

function updateAmmunition () {
    // for (let index = ammunition.length - 1; index > -1; -- index) {
    //     ammunition[index].update();
    // }
    bullet.update();
}

function draw() {
    weapon.draw();
    drawWall();
    drawAmmunition();
}

function drawAmmunition() {
    // for (let index = ammunition.length - 1; index > -1; -- index) {
    //     ammunition[index].draw();
    // }
    bullet.draw();
}

function loop() {
    clearCanvas();
    update();
    draw();
    requestAnimationFrame(loop);
}


prescribeWall();
loop();
