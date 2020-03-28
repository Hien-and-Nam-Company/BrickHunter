class Bullet {
    constructor() {
        this.x;
        this.y;
        this.color;
        this.dx = 0;
        this.r = 10;
        this.speed = 10;
        // this.canShot = false;
    }

    getReadyShoot() {
        // this.canShot = true;
        this.color = weapon.color;
        this.x = weapon.x + 10;
        this.y = weapon.y + weapon.height / 2;
        this.draw();
    }

    // dontgetReadyShoot() {
    //     this.canShot = false;
    // }

    draw() {
        context.beginPath();
        context.arc(this.x, this.y, this.r, 0, Math.PI * 2);
        context.stroke();
        context.fillStyle = this.color;
        context.fill();
        context.closePath();
    }

    shoot() {
        if (this.canShot) {
            this.x -= this.speed;
            this.draw();
        }
    }

}