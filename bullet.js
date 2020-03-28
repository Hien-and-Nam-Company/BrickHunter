class Bullet {
    constructor() {
        this.x;
        this.y;
        this.color;
        this.dx = 0;
        this.r = 10;
        this.speed = 10;
        this.canShot = true;
    }

    getReadyShoot() {
        this.canShot = true;
        this.color = weapon.color;
        this.x = weapon.x + 10;
        this.y = weapon.y + weapon.height / 2;
    }

    dontgetReadyShoot() {
        this.canShot = false;
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
        if (this.canShot) {
            this.x -= this.speed;
            this.initialDraw();
        }
    }

}