class PixelFont {
    constructor(
        text,
        x = 0,
        y = 0,
        endX,
        endY,
        color = "black",
        size = 5,
        speed = 10
    ) {
        this.text = text;
        this.x = x;
        this.y = y;
        this.endX = endX;
        this.endY = endY;
        this.color = color;
        this.size = size;
        this.speed = speed;
        this.height = 50; //Math.round(this.size * 1.8);

        this.currentChar = 0;
        this.currentLine = 0;
        this.tick = 0;
        this.lines = this.breakToLines();
        this.scrollY = 0;
    }

    draw() {
        window.ctx.fillStyle = this.color;
        window.ctx.font = `${this.size}px "Press Start 2P"`;

        window.ctx.save();

        window.ctx.beginPath();
        window.ctx.rect(this.x, this.y - 40, this.endX - this.x, this.endY - this.y);
        window.ctx.clip();
        for (let i = 0; i < this.currentLine; i++) {
            const y = this.y + (i * this.height) - this.scrollY;
            window.ctx.fillText(this.lines[i], this.x, y);
        }

        if (this.hasMoreLines()) {
            const y = this.y + (this.currentLine * this.height);
            window.ctx.fillText(this.lines[this.currentLine].substr(0, this.currentChar), this.x, y - this.scrollY);
        }

        window.ctx.restore();
    }

    update() {
        this.tick++;

        if (this.tick === this.speed) {
            this.tick = 0;
            this.currentChar++;

            if (this.hasMoreLines() && this.currentChar > this.currentLineLength()) {
                this.currentLine++;
                this.currentChar = 0;

                if (this.currentLine >= this.totalLinesCanFit()) {
                    this.scrollY += this.height;

                }
            }
        }
    }

    totalLinesCanFit() {
        return 4;
    }

    hasMoreLines() {
        return this.lines.length > this.currentLine;
    }

    currentLineLength() {
        return this.lines[this.currentLine].length;
    }

    breakToLines() {
        window.ctx.font = `${this.size}px "Press Start 2P"`;
        const words = this.text.split(' ');
        const lines = [];

        let currentWordIndex = 0;
        let wordsInLine = [];

        while (currentWordIndex < words.length) {
            const currentWord = words[currentWordIndex];
            wordsInLine.push(currentWord);
            currentWordIndex++;

            const currentLine = wordsInLine.join(' ');
            if (window.ctx.measureText(currentLine).width > (this.endX - this.x)) {
                wordsInLine.pop();
                lines.push(wordsInLine.join(' '));
                wordsInLine = [currentWord];
            }
        }
        lines.push(wordsInLine.join(' '));
        return lines;
    }
}

export default PixelFont;
