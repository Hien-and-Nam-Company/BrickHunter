function setupWall() {
    for (var i = 0; i < cols; i++) {
        wall[i] = [];
        for (var j = 0; j < rows; j++) {
            var x = i * brickSide;
            var y = j * brickSide + wallOffset;
            var color = randomColor();
            var isBroken = false;
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