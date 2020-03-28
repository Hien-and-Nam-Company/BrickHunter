class Bullet {
    constructor() {
        this.x;
        this.y;
        this.dx = 0;
        this.r = 10;
        this.color;
        this.speed = 10;
        this.canDestroy = false;
    }

    setCanDestroy(value) {
        this.canDestroy = value;
    }

    getReady() {
        this.x = weapon.x + 10;
        this.y = weapon.y + weapon.height / 2;
        this.color = weapon.color;
    }

    dontGetReady() {
        this.canShot = false;
    }

    draw() {
        context.beginPath();
        context.arc(this.x, this.y, this.r, 0, Math.PI * 2);
        context.stroke();
        context.fillStyle = this.color;
        context.fill();
        context.closePath();
    }

    move() {
        this.x -= this.speed;
        this.isMovingAway = true;
    }

    update() {
        this.move();
        this.draw();
    }

}