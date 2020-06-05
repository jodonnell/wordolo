class InputControl {
    constructor() {
        this.getKey();
        this.onPress = null;
        this.onMove = null;
        this.onDrop = null;
    }

    getKey() {
        const mouseConvert = (e) => {
            e.preventDefault();
            return {
                x: e.offsetX,
                y: e.offsetY,
            };
        };

        const touchConvert = (e) => {
            e.preventDefault();
            const touch = e.touches[0];
            return {
                x: touch.pageX,
                y: touch.pageY,
            };
        };

        const press = ({ x, y }) => {
            if (x < 100) {
                this.pressLeft();
            }
            else if (x >= 100 && x < 400) {
                this.pressRight();
            }
            else if (x >= 400 && x < 850) {
                this.pressJump();
            }
            else if (x >= 850) {
                this.pressBubble();
            }
        };

        const move = ({ x, y }) => {
        };

        const touchEnd = (e) => {
            e.preventDefault();
        };

        document.addEventListener('mousedown', (e) => this.onPress(mouseConvert(e)), false);
        document.addEventListener('mousemove', (e) => this.onMove(mouseConvert(e)), false);
        document.addEventListener('mouseup', (e) => this.onDrop(mouseConvert(e)), false);

        document.addEventListener('touchstart', (e) => this.onPress(touchConvert(e)), false);
        document.addEventListener('touchend', touchEnd, false);
        document.addEventListener('touchcancel', touchEnd, false);

    }
}

export default InputControl;
