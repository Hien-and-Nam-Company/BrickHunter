class Weapon {
    constructor() {
        this.width = 60;
        this.height = 90;
        this.x = canvas.width - 60;
        this.y = canvas.height - 90;
        this.color = randomWeaponColor();
    }

    draw() {
        context.beginPath();
        context.rect(this.x + this.width / 2, this.y, this.width / 2, this.height);
        context.rect(this.x, this.y + this.height / 3, this.width / 2, this.height / 3);
        context.stroke();
        context.fillStyle = this.color;
        context.fill();
        context.closePath();
    }

    get canMoveUp() {
        return this.y >= wallOffset + brickSide - this.height / 3;
    }

    get canMoveDown() {
        return this.y + this.height <= canvas.height - brickSide + this.height / 3 - 30;
    }

    moveUp() {
        if (this.canMoveUp) {
            this.y -= 30;
        }
    }

    moveDown() {
        if (this.canMoveDown) {
            this.y += 30;
        }
    }
}