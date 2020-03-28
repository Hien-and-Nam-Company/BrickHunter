class Bullet {
    constructor() {
        this.x;
        this.y;
        this.dx = 0;
        this.r = 10;
        this.color;
        this.speed = 10;
        this.canShoot = false;
    }

    getReadyShoot() {
        this.canShoot = true;
        this.color = weapon.color;
        this.x = weapon.x + 10;
        this.y = weapon.y + weapon.height / 2;
    }

    dontGetReadyShoot() {
        this.canShoot = false;
    }

    initialDraw() {
        context.beginPath();
        context.arc(this.x, this.y, this.r, 0, Math.PI * 2);
        context.stroke();
        context.fillStyle = this.color;
        context.fill();
        context.closePath();
    }

    draw() {
        if (this.canShoot) {
            this.x -= this.speed;
            this.initialDraw();
        }
    }

}