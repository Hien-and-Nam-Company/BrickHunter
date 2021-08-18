var maximumOfColumns = 10;
var amountOfColumns = 7;
var totalOfRows = 14;
var wallOffset = 50;

function prescribeWall() {
    for (let row = 0; row < totalOfRows; row++) {
        wall[row] = [];
        for (let col = 0; col < maximumOfColumns; col++) {
            if (col < amountOfColumns) {
                wall[row][col] = new Brick(row, col, randomColor(), true);
            } else {
                wall[row][col] = new Brick(row, col, 'black', false);
            }
        }
    }
}

function drawWall() {
    for (let row = 0; row < totalOfRows; row++) {
        for (let col = 0; col < 10; col++) {
            if (wall[row][col].isVisual) {
                context.beginPath();
                context.rect(wall[row][col].x, wall[row][col].y, brickSide, brickSide);
                context.strokeStyle = 'black';
                // context.lineWidth = 5;
                context.setLineDash([0]);
                context.stroke();
                context.fillStyle = wall[row][col].color;
                context.fill();
                context.closePath();
            }
        }
    }
}

function handleBulletAndWall() {
    for (let row = 0; row < totalOfRows; row++) {
        for (let col = 0; col < maximumOfColumns; col++) {
            if (Physics.collision(wall[row][col], bullet) && wall[row][col].isVisual) {
                if (wall[row][col].color == bullet.color) {
                    handleDestroy(row, col);
                } else if (wall[row][col].y == bullet.y) {
                    handleAppend(row, col);
                }
                bullet.disappear();
                drawWall();
            }
        }
    }
}

function handleDestroy(row, col) {
    wall[row][col].setVisual(false);
    checkAround(row, col, bullet.color);
}

function handleAppend(row, col) {
    if (col < 9) {
        wall[row][col + 1].setVisual(true);
        wall[row][col + 1].setColor(bullet.color);
    }
    drawWall();
}

function updateWall() {
    checkPullDown();
    checkPullLeft();
}

function checkAround(row, col, color) {
    checkUp(row, col, color);
    checkDown(row, col, color);
    checkLeft(row, col, color);
    checkRight(row, col, color);
}


function checkUp(row, col, color) {
    if (row > 0) {
        if (wall[row - 1][col].isVisual && wall[row - 1][col].color == color) {
            wall[row - 1][col].setVisual(false);
            checkAround(row - 1, col, color);
        }
    }
}

function checkDown(row, col, color) {
    if (row < totalOfRows - 1) {
        if (wall[row + 1][col].isVisual && wall[row + 1][col].color == color) {
            wall[row + 1][col].setVisual(false);
            checkAround(row + 1, col, color);
        }
    }
}

function checkLeft(row, col, color) {
    if (col > 0) {
        if (!wall[row][col - 1].isVisual && wall[row][col - 1].color == color) {
            wall[row][col - 1].setVisual(false);
            checkAround(row - 1, col, color);
        }
    }
}

function checkRight(row, col, color) {
    if (row < totalOfRows - 1) {
        if (!wall[row][col + 1].isVisual && wall[row][col + 1].color == color) {
            wall[row][col + 1].setVisual(false);
            checkAround(row, col + 1, color);
        }
    }
}

function checkPullDown() {
    for (let row = totalOfRows - 1; row > 0; row--) {
        for (let col = 0; col < maximumOfColumns -1 ; col++) {
            if (wall[row][col].isVisual == false) {
                swapBrick(wall[row][col], wall[row - 1][col]);
            }
        }
    }
}

function checkPullLeft() {
    for (let row = totalOfRows - 1; row > 0; row--) {
        for (let col = 0; col < maximumOfColumns - 1; col++) {
            if (wall[row][col].isVisual == false) {
                swapBrick(wall[row][col], wall[row][col + 1]);
            }
        }
    }
}

function swapBrick(firstBrick, secondBrick) {
    let color = firstBrick.color;
    let isVisual = firstBrick.isVisual;

    firstBrick.color = secondBrick.color;
    firstBrick.isVisual = secondBrick.isVisual;

    secondBrick.color = color;
    secondBrick.isVisual = isVisual;
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
