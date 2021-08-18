var brickSide = 30;
var wall = [];
var weapon = new Weapon();
// var bullets = new Array();

var ammunition = new Array();
ammunition.push(new Bullet());
// ammunition.push(new Bullet());
var bullet = ammunition[0];

document.addEventListener("keyup", function (event) {
    if (event.keyCode == 37) {

        // // ammunition.push(new Bullet();
        // for (let index = ammunition.length - 1; index > -1; -- index) {
        //     let bullet = ammunition[index];
            bullet.fire();
            weapon.color = randomWeaponColor();
        // }
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
    drawAmmunition();
}

function drawAmmunition() {
    for (let index = ammunition.length - 1; index > -1; -- index) {
        let bullet = ammunition[index];
        bullet.draw();
    }
}

function update() {

    bullet.update();
    updateWall();
    handleBulletAndWall();
}

// function updateAmmunition () {
//     for (let index = ammunition.length - 1; index > -1; -- index) {
//         let bullet = ammunition[index];
//         bullet.update();
//     }
// }

function loop() {
    clearCanvas();
    update();
    draw();
    requestAnimationFrame(loop);
}

prescribeWall();
loop();
