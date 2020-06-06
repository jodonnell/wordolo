import GameInit from './game_init';
import LetterPlacer from './letter_placer';
import Words from './words';

function between(x, min, max) {
  return x >= min && x <= max;
}

class GameController {
    constructor(control) {
        this.control = control;
        this.letters = LetterPlacer.place();

        this.control.onPress = (args) => this.onPress(args);
        this.control.onMove = (args) => this.onMove(args);
        this.control.onDrop = (args) => this.onDrop(args);
        this.heldLetters = [];
        new Words();
    }

    draw() {
        this.drawClearScreen();
        this.drawCenterLine();

        this.letters.forEach((letter) => {
            letter.draw();
        });
    }

    update() {
        this.letters.forEach((letter) => {
            letter.update();
        });


    }

    onPress({ x, y }) {
        this.letters.forEach((letter) => {
            if (between(letter.x, x - 20, x + 20) && between(letter.y, y - 20, y + 20)) {
                letter.isHeld = true;
                this.heldLetters.push(letter);
            }
        });
    }

    onMove({ x, y }) {
        if (this.heldLetters.length > 0) {
            this.heldLetters[0].dragTo(x, y);
        }
    }

    onDrop({ x, y }) {
        if (this.heldLetters.length > 0) {
            this.heldLetters[0].x = x;
            this.heldLetters[0].y = y;
            this.heldLetters[0].isHeld = false;
        }
        this.heldLetters = [];
    }

    drawCenterLine() {
        ctx.strokeStyle = "#FF0000";
        ctx.beginPath();
        ctx.moveTo(GameInit.centerX, 0);
        ctx.lineTo(GameInit.centerX, GameInit.height);
        ctx.stroke();
    }

    drawClearScreen() {
        ctx.fillStyle = '#00212d';
        ctx.fillRect(0, 0, GameInit.width, GameInit.height);
    }
}

export default GameController;
