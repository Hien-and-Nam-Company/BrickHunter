var brickSide = 30;
var wall = [];
var weapon = new Weapon();
var bullet = new Bullet();

document.addEventListener("keyup", function (event) {
    if (event.keyCode == 37) {
        bullet.shoot();
        weapon.color = randomWeaponColor();
    }
})

function handleBulletAndWall() {
    for (var i = 0; i < cols; i++) {
        for (var j = 0; j < rows; j++) {
            if (Physics.collision(wall[i][j], bullet) && !wall[i][j].isBroken) {
                handleDestroy(i,j);
                handleCombine(i,j);
                bullet.disappear();
                wallDraw();
            }
        }
    }
}

function handleDestroy(i, j){
    if (wall[i][j].color == bullet.color) {
        wall[i][j].setBroken(true);
        checkAround(i, j, bullet.color);
    }
}

function handleCombine(i, j){
    if (i < cols - 1 && wall[i][j].y == bullet.y) {
        wall[i + 1][j].setBroken(false);
        wall[i + 1][j].setColor(bullet.color);
    } else if(i == rows) {
        rows++;
        wall[i][j].setColor(bullet.color);
    }    
}

function draw() {
    weapon.draw();
    bullet.draw();
    wallDraw();
}

function update() {
    bullet.update();
    wallUpdate();
}

function loop() {
    clearCanvas();
    update();
    draw();
    requestAnimationFrame(loop);
}

wallSetup();
loop();