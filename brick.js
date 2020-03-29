class Brick {
    constructor(x, y, col, row, color) {
        this.x = x;
        this.y = y;
        this.col = col;
        this.row = row;
        this.color = color;
        this.isBroken = false;
    }

    // get colName() {
    //     switch (this.col) {
    //         case 0: return 'A';
    //         case 1: return 'B';
    //         case 2: return 'C';
    //         case 3: return 'D';
    //         case 4: return 'E';
    //         case 5: return 'F';
    //         case 6: return 'G';
    //     }
    // }

    // get rowName() {
    //     return ++this.row;
    // }

    // get brickName() {
    //     return this.colName + this.rowName;
    // }
    
    setBroken(value) {
        this.isBroken = value;
    }

    setColor(color) {
        this.color = color;
    }
    // isTouchedBy(object) {
    //     return !this.isBroken && this.x + brickSide > object.x - object.r && this.y < object.y && this.y + brickSide > object.y;
    // }
}