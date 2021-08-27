var initialNumOfColumns = 7;
var maxNumOfColumns = 10;
var maxNumOfRows = 14;
var grid = [];

function renderWall() {
    for (let row = 0; row < maxNumOfRows; row++) {
        grid[row] = [];
        for (let col = 0; col < maxNumOfColumns; col++) {
            if (col < initialNumOfColumns) {
                grid[row][col] = new Brick(row, col, randomColor(), true);
            } else {
                grid[row][col] = new Brick(row, col, 'black', false);
            }
        }
    }
}

function checkAllAround(row, col, color) {
    checkUp(row, col, color);
    checkDown(row, col, color);
    checkLeft(row, col, color);
    checkRight(row, col, color);
}

function checkUp(row, col, color) {
    if (row > 0) {
        if (grid[row - 1][col].isVisual && grid[row - 1][col].color == color) {
            grid[row - 1][col].setVisual(false);
            checkAllAround(row - 1, col, color);
        }
    }
}

function checkDown(row, col, color) {
    if (row < maxNumOfRows - 1) {
        if (grid[row + 1][col].isVisual && grid[row + 1][col].color == color) {
            grid[row + 1][col].setVisual(false);
            checkAllAround(row + 1, col, color);
        }
    }
}

function checkLeft(row, col, color) {
    if (col > 0) {
        if (!grid[row][col - 1].isVisual && grid[row][col - 1].color == color) {
            grid[row][col - 1].setVisual(false);
            checkAllAround(row - 1, col, color);
        }
    }
}

function checkRight(row, col, color) {
    if (row < maxNumOfRows - 1) {
        if (!grid[row][col + 1].isVisual && grid[row][col + 1].color == color) {
            grid[row][col + 1].setVisual(false);
            checkAllAround(row, col + 1, color);
        }
    }
}

function swapBricks(firstBrick, secondBrick) {
    let color = firstBrick.color;
    let isVisual = firstBrick.isVisual;

    firstBrick.color = secondBrick.color;
    firstBrick.isVisual = secondBrick.isVisual;

    secondBrick.color = color;
    secondBrick.isVisual = isVisual;
}

function wallIsCollidedBy(bullet) {
    for (let row = 0; row < maxNumOfRows; row++) {
        for (let col = 0; col < maxNumOfColumns; col++) {
            if (Physics.collision(grid[row][col], bullet) && grid[row][col].isVisual) {
                if (grid[row][col].color == bullet.color) {
                    console.log("row: "+grid[row][col].row);
                    console.log("col: "+grid[row][col].col);
                    removeBricks(row, col, bullet);
                } else if (grid[row][col].y == bullet.y) {
                    appendNewBricks(row, col, bullet);
                }
                bullet.disappear();
            }
        }
    }
}

function removeBricks(row, col, bullet) {
    grid[row][col].setVisual(false);
    checkAllAround(row, col, bullet.color);
}

function appendNewBricks(row, col, bullet) {
    if (col < 9) {
        grid[row][col + 1].setVisual(true);
        grid[row][col + 1].setColor(bullet.color);
    }
}

function drawWall() {
    for (let row = 0; row < maxNumOfRows; row++) {
        for (let col = 0; col < maxNumOfColumns; col++) {
            if (grid[row][col].isVisual) {
                context.beginPath();
                context.rect(grid[row][col].x, grid[row][col].y, brickWidth, brickWidth);
                context.strokeStyle = 'black';
                context.setLineDash([0]);
                context.stroke();
                context.fillStyle = grid[row][col].color;
                context.fill();
                context.closePath();
            }
        }
    }
}

function updateBricks() {
    shrinkDown();
    shrinkLeft();
}

function shrinkDown() {
    for (let row = maxNumOfRows - 1; row > 0; row--) {
        for (let col = 0; col < maxNumOfColumns -1 ; col++) {
            if (grid[row][col].isVisual == false) {
                swapBricks(grid[row][col], grid[row - 1][col]);
            }
        }
    }
}

function shrinkLeft() {
    for (let row = maxNumOfRows - 1; row > 0; row--) {
        for (let col = 0; col < maxNumOfColumns - 1; col++) {
            if (grid[row][col].isVisual == false) {
                swapBricks(grid[row][col], grid[row][col + 1]);
            }
        }
    }
}
