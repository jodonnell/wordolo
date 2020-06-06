const FRICTION = 0.4;
const MAX_SPEED = 40;

class Momentum {
    constructor() {
        this.xSpeed = 0;
        this.ySpeed = 0;
        this.lastX = 0;
        this.lastY = 0;
    }

    update(x, y) {
        this.xSpeed = x - this.lastX;
        this.ySpeed = y - this.lastY;
        this.lastX = x;
        this.lastY = y;

        this.xSpeed = Math.min(this.xSpeed, MAX_SPEED);
        this.xSpeed = Math.max(this.xSpeed, -MAX_SPEED);

        this.ySpeed = Math.min(this.ySpeed, MAX_SPEED);
        this.ySpeed = Math.max(this.ySpeed, -MAX_SPEED);
    }

    applyFriction() {
        if (this.xSpeed > 0)
            this.xSpeed = Math.max(0, this.xSpeed - FRICTION);
        if (this.ySpeed > 0)
            this.ySpeed = Math.max(0, this.ySpeed - FRICTION);

        if (this.xSpeed < 0)
            this.xSpeed = Math.min(0, this.xSpeed + FRICTION);
        if (this.ySpeed < 0)
            this.ySpeed = Math.min(0, this.ySpeed + FRICTION);
    }

    reverseX() {
        this.xSpeed *= -1;
    }

    reverseY() {
        this.ySpeed *= -1;
    }
}

export default Momentum;
