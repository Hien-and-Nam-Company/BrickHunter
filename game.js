var wall = [];
setupWall();
var weapon = new Weapon();

// var magazine = []; // magazine = băng đạn
// var index = 0;
// magazine[index] = new Bullet();

bullet1 = new Bullet();
bullet2 = new Bullet();
bullet3 = new Bullet();

bullet = bullet1;

document.addEventListener("keyup", function (event) {
    if (event.keyCode == 37) { // arrow left: 37;   space keyCode: 32
        bullet.getReady();
        bullet.setCanDestroy(true);
        weapon.color = randomColor();
        // bullet = bullet2;
    }
})

function collisionBulletBrick() {
    for (var i = 0; i < cols; i++) {
        for (var j = 0; j < rows; j++) {
            if ((wall[i][j].isTouchedBy(bullet)) && (wall[i][j].color == bullet.color)) {
                wall[i][j].setBroken(true);
                checkAround(i, j, bullet.color);
                bullet.setCanDestroy(false);               
            } else if (wall[i][j].isTouchedBy(bullet)) {
                bullet.setCanDestroy(false);
            }
        }
    }
}

function draw() {
    clearCanvas();
    drawWall();
    weapon.draw();
    bullet.update();
    collisionBulletBrick();
    requestAnimationFrame(draw);
}

draw();