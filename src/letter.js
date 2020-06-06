import GameInit from './game_init';
import Momentum from './momentum';
class Letter {
    constructor(letter, color, x, y) {
        this.letter = letter;
        this.color = color;
        this.x = x;
        this.y = y;

        this.isHeld = false;
        this.momentum = new Momentum();
    }

    draw() {
        ctx.save();
        ctx.translate(this.x + 5, this.y - 10);
        if (this.x > GameInit.centerX) {
            ctx.rotate(270 * Math.PI / 180);
        } else {
            ctx.rotate(90 * Math.PI / 180);
        }
        ctx.fillStyle = this.color;
        ctx.font = `70px Chewy`;
        ctx.fillText(this.letter, 0, 0);
        ctx.restore();
    }

    update() {
        if (this.isHeld)
            return;

        this.x += this.momentum.xSpeed;
        this.y += this.momentum.ySpeed;

        if (this.x > GameInit.width || this.x < 0)
            this.momentum.reverseX();

        if (this.y > GameInit.height || this.y < 0)
            this.momentum.reverseY();

        this.momentum.applyFriction();
    }

    dragTo(x, y) {
        this.x = x;
        this.y = y;

        this.momentum.update(x, y);
    }
}

export default Letter;
