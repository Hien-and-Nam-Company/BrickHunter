class Brick {
    constructor(col, row, color) {
        this.col = col;
        this.row = row;
        this.color = color;
        this.x = this.col * brickSide;
        this.y = this.row * brickSide + wallOffset;
        this.isBroken = false;
    }

    setBroken(value) {
        this.isBroken = value;
    }

    setColor(color) {
        this.color = color;
    }

}