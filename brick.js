class Brick {
    constructor(col, row, color, isVisual) {
        this.col = col;
        this.row = row;
        this.color = color;
        this.x = this.row * brickSide;
        this.y = this.col * brickSide + 50;
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