import { sortBy, groupBy, findIndex, filter } from 'lodash';
import rawWords from './words.txt';
import GameInit from './game_init';

const LETTER_MATCH_WIGGLE_ROOM = 30;

function between(x, min, max) {
  return x >= min && x <= max;
}

class Words {
    constructor() {
        this.words = {};
        rawWords.split('\n').forEach(word => {
            if (word.length >= 3)
                this.words[word] = true; // could put value in here
        });
    }

    checkForWord(letter, letters) {
        const grouped = groupBy(letters, (letter) => letter.x > GameInit.centerX);
        let boardHalf;
        const isRight = letter.x > GameInit.centerX;
        if (isRight)
            boardHalf = grouped[true];
        else
            boardHalf = grouped[false];


        const viableLetters = filter(
            sortBy(boardHalf, 'y'),
            (l) => between(l.x, letter.x - LETTER_MATCH_WIGGLE_ROOM, letter.x + LETTER_MATCH_WIGGLE_ROOM)
        );

        const letterIndex = findIndex(viableLetters, letter);
        const rawLetters = viableLetters.map(l => l.letter);

        const found = this.search(rawLetters, letterIndex, isRight);
        const notFound = found[0] === 0 && found[1] === 0;
        if (!notFound) {
            const removeLetters = viableLetters.slice(found[0], found[1]);
            for (let i = 0; i < removeLetters.length; i++) {
                const removeIndex = findIndex(letters, removeLetters[i]);
                letters.splice(removeIndex, 1);
            }
        }
    }

    search(rawLetters, letterIndex, isRight) {
        const biggestRange = [0, 0];
        for (let i = 0; i < rawLetters.length; i++) {
            for (let j = i; j <= rawLetters.length; j++) {
                const testWordArr = rawLetters.slice(i, j);
                const testWord = (isRight ? testWordArr.reverse() : testWordArr).join('');
                if (testWord.length === 0)
                    continue;
                if (this.words[testWord] && letterIndex >= i && letterIndex <= j) {
                    const lastSize = biggestRange[1] - biggestRange[0];
                    if (j - i > lastSize) {
                        biggestRange[0] = i;
                        biggestRange[1] = j;
                    }
                }
            }
        }
        return biggestRange;
    }
}

export default Words;
