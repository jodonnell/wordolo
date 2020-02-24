import SceneCreator from './scene_creator';
import GameInit from './game_init';
import InputControl from './input_control';
import GameController from './game_controller';
import Images from './images';

const start = async () => {
    SceneCreator.stats();

    new GameInit();
    window.ctx = document.getElementById('gameCanvas').getContext('2d');

    const images = new Images();
    await images.load();
    window.gameImages = images.images();

    const font = new FontFace(
        'Press Start 2P',
        'url(https://fonts.gstatic.com/s/pressstart2p/v8/e3t4euO8T-267oIAQAu6jDQyK3nVivNm4I81.woff2)'
    );

    await font.load();
    const gameController = new GameController(new InputControl());
    SceneCreator.create(gameController);
};

start();
