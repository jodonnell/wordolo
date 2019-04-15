import GameController from '../app/game_controller';
import sinon from 'sinon';

describe('GameController', function () {
    let gameController;

    beforeEach(function () {
        window.gameContext = { fillText: sinon.spy() };
        gameController = new GameController();
    });

    it('updates', function () {
        expect(gameController.update()).toBe(undefined);
    });

    it('draws', function () {
        expect(gameController.draw()).toBe(undefined);
        expect(window.gameContext.fillText.called).toBe(true);
    });
});
