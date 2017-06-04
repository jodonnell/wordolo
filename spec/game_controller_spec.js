import GameController from '../app/game_controller';

describe('GameController', function () {
    let gameController;

    beforeEach(function () {
        gameController = new GameController();
    });

    it('updates', function () {
        expect(gameController.update()).toBe(undefined);
    });

    it('draws', function () {
        expect(gameController.draw()).toBe(undefined);
    });
});
