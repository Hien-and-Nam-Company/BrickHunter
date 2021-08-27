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

    // getCoordinate(column, row) {
    //     var tilex = level.x + column * level.tilewidth;
    //     // X offset for odd or even rows
    //     if ((row + rowoffset) % 2) {
    //         tilex += level.tilewidth/2;
    //     }
    //
    //     var tiley = level.y + row * level.rowheight;
    //     return { tilex: tilex, tiley: tiley };
    // }

}
