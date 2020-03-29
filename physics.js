class Physics {
    distance(obj1, obj2) {
        return Math.sqrt(
            Math.pow(obj1.x - obj2.x, 2) +
            Math.pow(obj1.y - obj2.y, 2)
        );
    }

    collision(obj1, obj2) {
        return this.distance(obj1, obj2) <= brickSide;
    }

}