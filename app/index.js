import SceneCreator from './scene_creator';
import GameInit from './game_init';
import InputControl from './input_control';
import GameController from './game_controller';
import Images from './images';

SceneCreator.stats();

new GameInit();
window.gameContext = document.getElementById('gameCanvas').getContext('2d');
window.gameImages = new Images(function() {
    let gameController = new GameController(new InputControl());
    SceneCreator.create(gameController);
});
