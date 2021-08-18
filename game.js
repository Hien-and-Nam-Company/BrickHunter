var brickSide = 30;
var wall = [];
var weapon = new Weapon();
var ammunition = new Array();
ammunition.push(new Bullet());

document.addEventListener("keyup", function (event) {
    if (event.keyCode == 37) {
        ammunition.push(new Bullet());
        for (let i = ammunition.length - 1; i > -1; i--) {
            ammunition[i].fire();
        }
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
    for (let i = ammunition.length - 1; i > -1; i--) {
        handleBulletAndWall(ammunition[i]);
    }
}

function updateAmmunition () {
    for (let i = ammunition.length - 1; i > -1; i--) {
        ammunition[i].update();
    }
}

function draw() {
    weapon.draw();
    drawWall();
    drawAmmunition();
}

function drawAmmunition() {
    for (let i = ammunition.length - 1; i > -1; i--) {
        ammunition[i].draw();
    }
}

function loop() {
    clearCanvas();
    update();
    draw();
    requestAnimationFrame(loop);
}

prescribeWall();
loop();
