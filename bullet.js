class Bullet {
    constructor() {
        this.x;
        this.y;
        this.dx = 0;
        this.r = 10;
        this.color;
        this.speed = 4;
        this.canDestroy = false;
        this.side = 30;
    }

    setCanDestroy(value) {
        this.canDestroy = value;
    }

    setStickWall(object){
        this.setCanDestroy(false);
        this.x = object.x + brickSide;
        
    }

    getReady() {
        this.x = weapon.x + 10;
        this.y = weapon.y + weapon.height / 2 - 15;
        this.color = weapon.color;
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

    move() {
        this.x -= this.speed;
    }

    stopMove(){
        
    }

    update() {
        if (this.canDestroy) {
            this.move();
            this.draw();
        }
    }
}