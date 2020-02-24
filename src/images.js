class Images {
    constructor(callback) {
        this._images = {};
    }

    images() {
        return this._images;
    }

    async load() {
        const shart = [
            this._loadImage('mamaPortrait', 'jp_pixelize_14.jpg'),
            this._loadImage('mamaPortraitOpen', 'jp_pixelize_14_open.jpg'),
        ];
        return Promise.all(shart);
    }

    async _loadImage(prop, imageFile) {
        return new Promise((resolve, reject) => {
            this._images[prop] = new Image();
            this._images[prop].onload = resolve;
            this._images[prop].src = 'assets/' + imageFile;
        });
    }

}

export default Images;
