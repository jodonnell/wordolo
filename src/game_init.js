class GameInit {
    constructor(hide) {
        this.createCanvas();
        if (hide) {
            this.hide = true;
        }
    }

    static get width() {
        return window.innerWidth;
    }

    static get height() {
        return window.innerHeight;
    }

    static get centerX() {
        return this.width / 2;
    }

    static get centerY() {
        return this.height / 2;
    }

    createCanvas() {
        let left = this.viewportWidth() / 2 - GameInit.width / 2;
        let top = this.viewportHeight() / 2 - GameInit.height / 2;

        let canvas = document.createElement('canvas');
        canvas.id = 'gameCanvas';
        canvas.width = GameInit.width;
        canvas.height = GameInit.height;
        document.body.appendChild(canvas);

        canvas.style.position = 'absolute';
        canvas.style.top = top + 'px';
        canvas.style.left = left + 'px';

        if (this.hide) {
            canvas.style.visibilty = 'hidden';
        }
    }

    viewportWidth() {
        let w = window,
            e = document.documentElement,
            g = document.getElementsByTagName('body')[0];

        return w.innerWidth || e.clientWidth || g.clientWidth;
    }

    viewportHeight() {
        let w = window,
            e = document.documentElement,
            g = document.getElementsByTagName('body')[0];

        return w.innerHeight|| e.clientHeight|| g.clientHeight;
    }

    destroyCanvas() {
        let canvas = document.getElementById('gameCanvas');
        document.body.removeChild(canvas);
    }
}

export default GameInit;
