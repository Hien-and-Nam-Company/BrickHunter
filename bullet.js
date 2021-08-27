class Bullet {
    constructor(x, y, vx, vy, color) {
        this.x = x;
        this.y = y;
        this.velocityX = vx;
        this.velocityY = vy;
        this.color = color;
        this.side = brickWidth - 3;
        this.direction;
    }

    getDirection() {
        if (this.velocityX != 0 && this.velocityY == 0)
            return 'h'; // horizontally
        if (this.velocityY != 0 && this.velocityX == 0)
            return 'v'; // vertically
    }

    // getCoordinate() {
    //     var tilex = level.x + column * level.tilewidth;
    //     // X offset for odd or even rows
    //     if ((row + rowoffset) % 2) {
    //         tilex += level.tilewidth/2;
    //     }
    //
    //     var tiley = level.y + row * level.rowheight;
    //     return { tilex: tilex, tiley: tiley };
    // }

    updatePosition() {
        this.x += this.velocityX;
        this.y += this.velocityY;
    }

    stopMovingLeft() {
        this.velocityX = 0;
    }

    drop() {
        this.velocityY = 5;
        this.isDroppingDown = true;
    }

    stopDropping() {
        this.velocityY = 0;
    }

    disappear() {
        this.y = canvas.height + brickWidth;
    }

    draw() {
        context.beginPath();
        // context.arc(this.x, this.y, this.r, 0, Math.PI * 2);
        context.rect(this.x, this.y, this.side, this.side);
        context.stroke();
        context.fillStyle = this.color;
        context.fill();
        context.closePath();
    }

}
