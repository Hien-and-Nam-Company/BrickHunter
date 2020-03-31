var cols = 7;
var rows = 14;
var wallOffset = 50;

function wallUpdate() {
    checkPullDown();
    checkPullLeft();
}

function columnAndRowUpdate() {
    cols += subtractedCols;
    rows += subtractedRows
}

function wallSetup() {
    for (var col = 0; col < cols; col++) {
        wall[col] = [];
        for (var row = 0; row < rows; row++) {
            var color = randomColor();
            wall[col][row] = new Brick(col, row, color);
        }
    }
}

function handleBulletAndWall() {
    for (var col = 0; col < cols; col++) {
        for (var row = 0; row < rows; row++) {
            if (Physics.collision(wall[col][row], bullet) && !wall[col][row].isBroken) {
                if (wall[col][row].color == bullet.color) {
                    handleDestroy(col, row);
                } else if (wall[col][row].y == bullet.y) {
                    handleCombine(col, row);
                }
                bullet.disappear();
                bullet.getReadyForNextShot();
                wallDraw();
            }
        }
    }
}

function handleDestroy(col, row) {
    wall[col][row].setBroken(true);
    checkAround(col, row, bullet.color);
}

function handleCombine(col, row) {
    if (col < cols - 1) {
        
        wall[col + 1][row].setBroken(false);
        wall[col + 1][row].setColor(bullet.color);
    } else if (col == cols - 1) {
        cols++;
        // wall[cols - 1][rows - 1] = new ;
        wall[cols - 1][rows - 1].setColor(bullet.color);
    }
    wallDraw();
}

function wallDraw() {
    for (var col = 0; col < cols; col++) {
        for (var row = 0; row < rows; row++) {
            if (!wall[col][row].isBroken) {
                context.beginPath();
                context.rect(wall[col][row].x, wall[col][row].y, brickSide, brickSide);
                context.strokeStyle = 'black';
                // context.lineWidth = 5;
                context.setLineDash([0]);
                context.stroke();
                context.fillStyle = wall[col][row].color;
                context.fill();
                context.closePath();
            }
        }
    }
}

function checkAround(col, row, color) {
    checkUp(col, row, color);
    checkDown(col, row, color);
    checkLeft(col, row, color);
    checkRight(col, row, color);
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

function checkPullDown() {
    for (var col = 0; col < cols; col++) {
        for (var row = rows - 1; row > 0; row--) {
            if (wall[col][row].isBroken) {
                swapBrick(wall[col][row], wall[col][row - 1]);
            }
        }
    }
}

function checkPullLeft() {
    for (var col = 0; col < cols - 1; col++) {
        for (var row = rows - 1; row > 0; row--) {
            if (wall[col][row].isBroken) {
                swapBrick(wall[col][row], wall[col + 1][row]);
            }
        }
    }
}

function swapBrick(firstBrick, secondBrick) {
    var color = firstBrick.color;
    var isBroken = firstBrick.isBroken;

    firstBrick.color = secondBrick.color;
    firstBrick.isBroken = secondBrick.isBroken;

    secondBrick.color = color;
    secondBrick.isBroken = isBroken;
}

function colorEffect(brickColor, bulletColor) {
    if (brickColor.color == 'green' && bulletColor == 'yellow') {
        brickColor.setColor('blue');
    } else if (brickColor.color == 'green' && bulletColor == 'blue') {
        brickColor.setColor('yellow');
    }

    else if (brickColor.color == 'orange' && bulletColor == 'red') {
        brickColor.setColor('yellow');
    } else if (brickColor.color == 'orange' && bulletColor == 'yellow') {
        brickColor.setColor('red');
    }

    else if (brickColor.color == 'purple' && bulletColor == 'blue') {
        brickColor.setColor('red');
    } else if (brickColor.color == 'purple' && bulletColor == 'red') {
        brickColor.setColor('blue');
    }
}

function hasToAddNewCol() {

}

