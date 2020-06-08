import { last } from 'lodash';
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
        this.heldLetters = {};
        this.words = new Words();

        document.addEventListener('stoppedMoving', (e) => this.checkForWord(e.detail.letter), false);

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

    checkForWord(letter) {
        this.words.checkForWord(letter, this.letters);
    }

    onPress(touches) {
        const { x, y, id } = last(touches);
        const isLeft = x < GameInit.centerX;
        this.letters.forEach((letter) => {
            let isLetterHeld;
            if (isLeft)
                isLetterHeld = between(letter.x, x - 70, x) && between(letter.y, y - 50, y + 20);
            else
                isLetterHeld = between(letter.x, x, x + 70) && between(letter.y, y - 20, y + 50);
            if (isLetterHeld) {
                letter.isHeld = true;
                this.heldLetters[id] = letter;
            }
        });
    }

    onMove(touches) {
        const { x, y, id } = last(touches);
        if (id in this.heldLetters) {
            this.heldLetters[id].dragTo(x, y);
        }
    }

    onDrop(touches) {
        const { x, y, id } = last(touches);
        if (id in this.heldLetters) {
            const letter = this.heldLetters[id];
            letter.x = x;
            letter.y = y;
            letter.isHeld = false;
            if (!letter.momentum.isMoving())
                this.checkForWord(letter, this.letters);

        }
        delete this.heldLetters[id];
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
