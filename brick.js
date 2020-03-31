class Brick {
    constructor(col, row, color, isBroken) {
        this.col = col;
        this.row = row;
        this.color = color;
        this.x = this.row * brickSide;
        this.y = this.col * brickSide + 50;
        this.isBroken = isBroken;
    }

    setBroken(value) {
        this.isBroken = value;
    }

    setColor(color) {
        this.color = color;
    }

}