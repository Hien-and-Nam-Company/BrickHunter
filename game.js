var wall = [];
setupWall();
var weapon = new Weapon();
var magazine = []; // magazine = băng đạn
var index = 0;
magazine[index] = new Bullet();

document.addEventListener("keydown", function (event) {
    if (event.keyCode == 38) {
        weapon.moveUp();
    }
    if (event.keyCode == 40) {
        weapon.moveDown();
    }
})

document.addEventListener("keyup", function (event) {
    if (event.keyCode == 37) { // arrow left: 37;   space keyCode: 32
        magazine[index].getReadyShoot();
        weapon.color = randomColor();
        // index++;
        // magazine[index] = new Bullet();
    }
})

function collisionBulletBrick() {
    for (var i = 0; i < cols; i++) {
        for (var j = 0; j < rows; j++) {
            if ((wall[i][j].isTouchedByBullet) && (wall[i][j].color == magazine[index].color)) {
                wall[i][j].setBroken(true);
            } else {
                //dontGetReadyShoot();
            }
        }
    }
}

function draw() {
    clearCanvas();
    drawWall();
    weapon.draw();
    magazine[index].draw();
    collisionBulletBrick();
    requestAnimationFrame(draw);
}

draw();