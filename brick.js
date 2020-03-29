class Brick {
    constructor(x, y, col, row, color) {
        this.x = x;
        this.y = y;
        this.col = col;
        this.row = row;
        this.color = color;
        this.isBroken = false;
    }
    
    setBroken(value) {
        this.isBroken = value;
    }

    setColor(color) {
        this.color = color;
    }

}