class Bullet {
    constructor(x, y, vx, vy, color) {
        this.x = x;
        this.y = y;
        this.velocityX = vx;
        this.velocityY = vy;
        this.color = color;
        this.side = brickSide - 3;
        this.isMovingLeft = false;
        this.isDroppingDown = false;
<<<<<<< HEAD
    }

    getDirection() {
        if (this.velocityX != 0) {
            return 'h'; // horizontally
            break;
        }
        if (this.velocityY != 0) {
            return 'v'; // vertically
            break;
        }
    }

    setVelocity(vx, vy) {
        this.velocityX = vx;
        this.velocityY = vy;
=======
>>>>>>> parent of 9a373f8 (getDirection)
    }

    update() {
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
        this.y = canvas.height + brickSide;
    }

    draw() {
        context.beginPath();
        context.rect(this.x, this.y, this.side, this.side);
        context.stroke();
        context.fillStyle = this.color;
        context.fill();
        context.closePath();
    }

}
