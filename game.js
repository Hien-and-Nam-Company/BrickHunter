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
            } else if (wall[i][j].isTouchedBy(bullet)) {
                bullet.setCanDestroy(false);
            }
        }
    }
}

function checkUp(col, row, color) {
    if (row > 0) {
        if (!wall[col][row - 1].isBroken && wall[col][row - 1].color == color) {
            wall[col][row - 1].setBroken(true);
            checkAround(col, row - 1, color);
        }
    }
}

function checkDown(col, row, color) {
    if (row < rows - 1) {
        if (!wall[col][row + 1].isBroken && wall[col][row + 1].color == color) {
            wall[col][row + 1].setBroken(true);
            checkAround(col, row + 1, color);
        }
    }
}

function checkLeft(col, row, color) {
    if (col > 0) {
        if (!wall[col - 1][row].isBroken && wall[col - 1][row].color == color) {
            wall[col - 1][row].setBroken(true);
            checkAround(col - 1, row, color);
        }
    }
}

function checkRight(col, row, color) {
    if (col < cols - 1) {
        if (!wall[col + 1][row].isBroken && wall[col + 1][row].color == color) {
            wall[col + 1][row].setBroken(true);
            checkAround(col + 1, row, color);
        }
    }
}

function checkAround(col, row, color) {
    checkUp(col, row, color);
    checkDown(col, row, color);
    checkLeft(col, row, color);
    checkRight(col, row, color);
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