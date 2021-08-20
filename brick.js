class Brick {
    constructor(col, row, color, isVisual) {
        this.col = col;
        this.row = row;
        this.color = color;
        this.x = this.row * brickWidth;
        this.y = this.col * brickWidth + 50;
        this.isVisual = isVisual;
        this.isBroken = false;
    }

    setVisual(isVisual){
        this.isVisual = isVisual;
    }

    setBroken(value) {
        this.isBroken = value;
    }

    setColor(color) {
        this.color = color;
    }

}
