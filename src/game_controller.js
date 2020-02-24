import PixelFont from './pixel_font';

const text = `Cub I was having trouble signing into the itunes store...the passcode was not coming to my 'trusted device', but I called 'Brad' and he told me how to do it. Even though it didn't work when he was telling me and I was loosing focus and couldn't understand what he was saying. But then I came back later, started again and it did work!!!

Why is it that all the terms like password, passcode, apple id just jumble in my mind and I cant remember what they are? I am sick of being old. I want a young tech savvy brain.

Poor Brad, I cut him off and said my son will help me  thank you very much goodbye. He was reluctant to let me go. They probably get graded on successful solutions. Oh well.

Hope you are having a good weekend. Love, MOM`;

class GameController {
    constructor(control) {
        this.control = control;
        this.current = window.gameImages.mamaPortrait;
        this.tick = 0;
        this.text = new PixelFont(text, 275, 590, 1200, 800, 'blue', 30, 1);
    }

    draw() {
        this.clearScreen();
        this.makeWordBubble();
        this.text.draw();
        window.ctx.drawImage(this.current, 10, 540, 250, 250);
    }

    clearScreen() {
        window.ctx.fillStyle = '#00212d';
        window.ctx.fillRect(0, 0, 1200, 800);
    }

    makeWordBubble() {
        ctx.fillStyle = "#e1e1e1";
        ctx.fillRect(265, 540, 925, 250);
    }

    update() {
        this.text.update();
        if (this.tick === 15) {
            if (this.current === window.gameImages.mamaPortrait) {
                this.current = window.gameImages.mamaPortraitOpen;
            } else {
                this.current = window.gameImages.mamaPortrait;
            }

            this.tick = 0;
        }

        this.tick++;
    }
}

export default GameController;
