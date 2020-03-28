class Brick {
    constructor(x, y, col, row, color) {
        this.x = x;
        this.y = y;
        this.col = col;
        this.row = row;
        this.color = color;
        this.isBroken = false;
    }

    isTouchedBy(bul) {
        return !this.isBroken && this.x + brickSide > bul.x - bul.r && this.y < bul.y && this.y + brickSide > bul.y;
    }

    setBroken(status) {
        this.isBroken = status;
    }

    get colName() {
        switch (this.col) {
            case 0: return 'A';
            case 1: return 'B';
            case 2: return 'C';
            case 3: return 'D';
            case 4: return 'E';
            case 5: return 'F';
            case 6: return 'G';
        }
    }

    get rowName() {
        return ++this.row;
    }

    get brickName() {
        return this.colName + this.rowName;
    }
}