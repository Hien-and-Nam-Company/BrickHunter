var brickSide = 30;
var wall = [];
setupWall();
var weapon = new Weapon();
var bullet = new Bullet();
// var physics = new Physics();

document.addEventListener("keyup", function (event) {
    if (event.keyCode == 37) {
        bullet.shoot();
        weapon.color = randomWeaponColor();
    }
})

function collisionBulletBrick() {
    for (var i = 0; i < cols; i++) {
        for (var j = 0; j < rows; j++) {
            if (Physics.collision(wall[i][j], bullet)) {
                if (wall[i][j].color == bullet.color) {
                    wall[i][j].setBroken(true);
                    checkAround(i, j, bullet.color);
                } //else colorEffect(wall[i][j], bullet.color);
                bullet.stopMovingLeft();
            }
        }
    }
}

function draw(){
    weapon.draw();
    drawWall();
    bullet.draw();
}

function update(){
    bullet.update();
    collisionBulletBrick();
    checkDropDown();
    // checkDropLeft();
}

function loop() {
    clearCanvas();
    update();
    draw();
    requestAnimationFrame(loop);
}

loop();