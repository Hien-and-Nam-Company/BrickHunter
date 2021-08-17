class Bullet {
    constructor() {
        this.x;
        this.y;
        this.color;
        this.side = brickSide - 3;
        this.velocityX = 0;
        this.velocityY = 0;
        this.isMovingLeft = false;
        this.isDroppingDown = false;
        this.canFire = false;
    }

    // updatePosition() {
    //     this.x += this.velocityX;
    // }


    getReadyForNextShot(value) {
        // if (something)
        this.canFire = true;
    }

    fire() {
        bullet.getReady();
        weapon.color = randomWeaponColor();
        if (this.canFire){
            this.velocityX = -5;
            this.isMovingLeft = true;
        }
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

    update() {
        this.x += this.velocityX;
        this.y += this.velocityY;
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

    getReady() {
        this.x = weapon.x + 10;
        this.y = weapon.y + weapon.height / 2 - 15;
        this.color = weapon.color;
        this.canFire = true;
    }

}
