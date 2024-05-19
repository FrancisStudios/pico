const { indexTransformBootstrap } = require('../index-transform.module.js');
const initScreenGibHandlerBackPls = require('./utils/init-screen.util.js');
const boot = require('../os/boot.js');

/* Booting Up Default Settings */
const bootMeUpSenpai = () => {
    document.addEventListener('DOMContentLoaded', () => {
        indexTransformBootstrap();
        const { canvas, screen } = initScreenGibHandlerBackPls();
        boot(canvas, screen)
            .then((ready) => {

            });
    });
}

/* Entry point of Executor */
const executeMePICO = (programsFilePath = false, osFilePath = false) => {
    if (programsFilePath) {
        /* Execute Program From ../programs/~ */
    } else {
        /* Execute Program From OS */
        if (osFilePath) {

        } else console.error('PICO: No OS file path defined!');
    }
}

module.exports = {
    bootMeUpSenpai,
    executeMePICO
};