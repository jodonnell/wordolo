import Letter from './letter';
import GameInit from './game_init';
import { times, shuffle } from 'lodash';

class LetterPlacer {
    static place() {
        const letters = this.getLetters();
        const letterObjs = [];
        for (let i = 0; i < letters.length; i++) {
            const x = Math.floor(Math.random() * GameInit.width) + 0;
            const y = Math.floor(Math.random() * GameInit.height) + 0;

            letterObjs.push(
                new Letter(letters[i], this.colors(), x, y)
            );
        }
        return letterObjs;
    }

    static getLetters() {
        return shuffle([
            ...times(12, () => 'e'),
            ...times(9, () => 'a'),
            ...times(9, () => 'i'),
            ...times(8, () => 'o'),
            ...times(6, () => 'n'),
            ...times(6, () => 'r'),
            ...times(6, () => 't'),
            ...times(4, () => 'l'),
            ...times(4, () => 's'),
            ...times(4, () => 'u'),
            ...times(4, () => 'd'),
            ...times(3, () => 'g'),
            ...times(2, () => 'b'),
            ...times(2, () => 'b'),
            ...times(2, () => 'c'),
            ...times(2, () => 'm'),
            ...times(2, () => 'p'),
            ...times(2, () => 'f'),
            ...times(2, () => 'h'),
            ...times(2, () => 'v'),
            ...times(2, () => 'w'),
            ...times(2, () => 'y'),
            ...times(1, () => 'k'),
            ...times(1, () => 'j'),
            ...times(1, () => 'x'),
            ...times(1, () => 'q'),
            ...times(1, () => 'z'),
        ]);
    }

    static colors() {
        return shuffle(['#3772ff', '#f038ff', '#ef709d', '#e2ef70', '#70e4ef'])[0];

    }
}

export default LetterPlacer;
