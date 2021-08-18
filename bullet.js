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
    }

    // fire() {
    //     this.x = ;
    //     this.y = ;
    //     this.color = weapon.color;
    //     this.velocityX = ;
    //     this.isMovingLeft = true;
    // }

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
        // context.arc(this.x, this.y, this.r, 0, Math.PI * 2);
        context.rect(this.x, this.y, this.side, this.side);
        context.stroke();
        context.fillStyle = this.color;
        context.fill();
        context.closePath();
    }

}
