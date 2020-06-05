import SceneCreator from './scene_creator';
import GameInit from './game_init';
import InputControl from './input_control';
import GameController from './game_controller';

const start = async () => {
    SceneCreator.stats();

    new GameInit();
    window.ctx = document.getElementById('gameCanvas').getContext('2d');

    const font = new FontFace(
        'Chewy',
        'url(https://fonts.gstatic.com/s/chewy/v11/uK_94ruUb-k-wn52KjI9OPec.woff2)'
    );

    await font.load();
    const gameController = new GameController(new InputControl());
    SceneCreator.create(gameController);
};

start();
