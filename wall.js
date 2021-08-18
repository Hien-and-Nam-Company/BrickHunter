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
                context.setLineDash([0]);
                context.stroke();
                context.fillStyle = wall[row][col].color;
                context.fill();
                context.closePath();
            }
        }
    }
}

function updateWall() {
    checkPullDown();
    checkPullLeft();
}


function bulletCollideWall(bullet) {
    for (let row = 0; row < totalOfRows; row++) {
        for (let col = 0; col < maximumOfColumns; col++) {
            if (Physics.collision(wall[row][col], bullet) && wall[row][col].isVisual) {
                if (wall[row][col].color == bullet.color) {
                    destroyWall(row, col, bullet);
                } else if (wall[row][col].y == bullet.y) {
                    appendNewBrick(row, col, bullet);
                }
                bullet.disappear();
                drawWall();
            }
        }
    }
}

function destroyWall(row, col, bullet) {
    wall[row][col].setVisual(false);
    checkAllAround(row, col, bullet.color);
}

function appendNewBrick(row, col, bullet) {
    if (col < 9) {
        wall[row][col + 1].setVisual(true);
        wall[row][col + 1].setColor(bullet.color);
    }
    drawWall();
}

function checkAllAround(row, col, color) {
    checkUp(row, col, color);
    checkDown(row, col, color);
    checkLeft(row, col, color);
    checkRight(row, col, color);
}

function checkUp(row, col, color) {
    if (row > 0) {
        if (wall[row - 1][col].isVisual && wall[row - 1][col].color == color) {
            wall[row - 1][col].setVisual(false);
            checkAllAround(row - 1, col, color);
        }
    }
}

function checkDown(row, col, color) {
    if (row < totalOfRows - 1) {
        if (wall[row + 1][col].isVisual && wall[row + 1][col].color == color) {
            wall[row + 1][col].setVisual(false);
            checkAllAround(row + 1, col, color);
        }
    }
}

function checkLeft(row, col, color) {
    if (col > 0) {
        if (!wall[row][col - 1].isVisual && wall[row][col - 1].color == color) {
            wall[row][col - 1].setVisual(false);
            checkAllAround(row - 1, col, color);
        }
    }
}

function checkRight(row, col, color) {
    if (row < totalOfRows - 1) {
        if (!wall[row][col + 1].isVisual && wall[row][col + 1].color == color) {
            wall[row][col + 1].setVisual(false);
            checkAllAround(row, col + 1, color);
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
