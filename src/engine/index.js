const { indexTransformBootstrap } = require('../index-transform.module.js');
const initScreenGibHandlerBackPls = require('./utils/init-screen.util.js');

/* Booting Up Default Settings */
const bootMeUpSenpai = () => {
    document.addEventListener('DOMContentLoaded', () => {
        indexTransformBootstrap();
        const { canvas, screen } = initScreenGibHandlerBackPls();
    });
}

module.exports = { bootMeUpSenpai };