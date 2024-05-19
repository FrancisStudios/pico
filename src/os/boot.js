const showSplashWelcome = require('./utils/welcome.util');

/* Boot Up Emulated Operating System */
const boot = (canvas, screen) => {
    return new Promise((resolve, reject) => {
        showSplashWelcome().then((fini) => {
            if (fini) resolve({ fini: true });
            else reject();
        });
    });
};

module.exports = boot;