var canvas = document.getElementById('BrickHunter');
var context = canvas.getContext('2d');

function clearCanvas() {
    context.clearRect(0, 0, canvas.width, canvas.height);
}

//var gameColor = ['red', 'yellow', 'blue', 'green', 'violet', 'orange'];
var gameColor = ['red', 'yellow', 'blue']; // gameColor for test
function randomColor() {
    return gameColor[Math.floor(Math.random() * gameColor.length)];
}

var cols = 7;
var rows = 14;
var brickSide = 30;
var wallOffset = 50;

document.addEventListener("keydown", function (event) {
    if (event.keyCode == 38) {
        weapon.moveUp();
    }
    if (event.keyCode == 40) {
        weapon.moveDown();
    }
})

function setupWall() {
    for (var i = 0; i < cols; i++) {
        wall[i] = [];
        for (var j = 0; j < rows; j++) {
            var x = i * brickSide;
            var y = j * brickSide + wallOffset;
            var color = randomColor();
            // var isBroken = false;
            wall[i][j] = new Brick(x, y, i, j, color);
        }
    }
}

function drawWall() {
    for (var i = 0; i < cols; i++) {
        for (var j = 0; j < rows; j++) {
            if (!wall[i][j].isBroken) {
                context.beginPath();
                context.rect(wall[i][j].x, wall[i][j].y, brickSide, brickSide);
                context.stroke();
                context.fillStyle = wall[i][j].color;
                context.fill();
                context.closePath();
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

function swapBrick(firstBrick, secondBrick) {
    var color = firstBrick.color;
    var isBroken = firstBrick.isBroken;

    firstBrick.color = secondBrick.color;
    firstBrick.isBroken = secondBrick.isBroken;

    secondBrick.color = color;
    secondBrick.isBroken = isBroken;
}

function checkDropDown() {
    for (var i = 0; i < cols; i++) {
        for (var j = rows - 1; j > 0; j--) {
            if (wall[i][j].isBroken) {
                swapBrick(wall[i][j], wall[i][j - 1]);
            }
        }
    }
}