class Brick {
    constructor(x, y, col, row, color) {
        this.x = x;
        this.y = y;
        this.col = col;
        this.row = row;
        this.color = color;
    }

    get colName() {
        if (this.col == 0) return 'A';
        if (this.col == 1) return 'B';
        if (this.col == 2) return 'C';
        if (this.col == 3) return 'D';
        if (this.col == 4) return 'E';
        if (this.col == 5) return 'F';
        if (this.col == 6) return 'G';
    }
    
    get rowName() {
        return ++ this.col;
    }

    get brickName(){
        return this.colName + this.row;
    }
}