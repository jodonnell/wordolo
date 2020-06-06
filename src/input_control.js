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
                id: '0',
            };
        };

        const touchConvert = (e) => {
            const touch = e.touches[0] || e.changedTouches[0];
            return {
                x: touch.pageX,
                y: touch.pageY,
                id: touch.identifier.toString()
            };
        };

        document.addEventListener('mousedown', (e) => this.onPress(mouseConvert(e)), false);
        document.addEventListener('mousemove', (e) => this.onMove(mouseConvert(e)), false);
        document.addEventListener('mouseup', (e) => this.onDrop(mouseConvert(e)), false);

        document.addEventListener('touchstart', (e) => this.onPress(touchConvert(e)), false);
        document.addEventListener('touchmove', (e) => this.onMove(touchConvert(e)), false);
        document.addEventListener('touchend', (e) => this.onDrop(touchConvert(e)), false);
        document.addEventListener('touchcancel', (e) => this.onDrop(touchConvert(e)), false);
    }
}

export default InputControl;
