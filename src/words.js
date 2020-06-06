import rawWords from './words.txt';

class Words {
    constructor() {
        this.words = {};
        rawWords.split('\n').forEach(word => {
            this.words[word] = true; // could put value in here
        });
    }
}

export default Words;
