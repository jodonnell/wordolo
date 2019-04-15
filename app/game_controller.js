class GameController {
    constructor(control) {
        this.control = control;
    }

    draw() {
        window.gameContext.fillStyle = 'orange';
        window.gameContext.font = '48px serif';
        window.gameContext.fillText('Hello WORLD', 50, 50);
    }

    update() {
    }
}

export default GameController;
