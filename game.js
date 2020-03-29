var brickSide = 30;
var wall = [];
setupWall();
var weapon = new Weapon();
var bullet = new Bullet();

document.addEventListener("keyup", function (event) {
    if (event.keyCode == 37) { // arrow left: 37;   space keyCode: 32
        bullet.getReady();
        bullet.setCanDestroy(true);
        weapon.color = randomWeaponColor();
    }
})

function collisionBulletBrick() {
    for (var i = 0; i < cols; i++) {
        for (var j = 0; j < rows; j++) {
            if ((wall[i][j].isTouchedBy(bullet))) {
                if ((wall[i][j].color == bullet.color)) {
                    wall[i][j].setBroken(true);
                    checkAround(i, j, bullet.color);
                } //else colorEffect(wall[i][j], bullet.color);
                bullet.setCanDestroy(false);
            }
        }
    }
}

function draw() {
    clearCanvas();
    weapon.draw();
    drawWall();
    bullet.update();
    collisionBulletBrick();
    checkDropDown();
    checkDropLeft();
    requestAnimationFrame(draw);
}

draw();