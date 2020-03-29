class Bullet {
    constructor() {
        this.x;
        this.y;
        this.side = brickSide;
        this.dx = 0;
        this.r = 10;
        this.color;
        this.speed = 5;
        this.canDestroy = false;

    }

    setCanDestroy(value) {
        this.canDestroy = value;
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

    moveLeft() {
        this.x -= this.speed;
    }

    dropDown(){
        
    }
    

    update() {
        if (this.canDestroy) {
            this.moveLeft();
            this.draw();
        }
    }
}