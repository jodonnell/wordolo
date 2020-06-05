import GameInit from './game_init';
class Letter {
    constructor(letter, color, x, y) {
        this.letter = letter;
        this.color = color;
        this.x = x;
        this.y = y;
    }

    draw() {
        ctx.save();
        ctx.translate(this.x, this.y);
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
    }
}

export default Letter;
