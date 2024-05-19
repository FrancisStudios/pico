const { executeMePico } = require('../../engine/index');

/* Bootstraps Bootup Animation */
const showSplashWelcome = () => {
    executeMePico('/os/pic/boot.pic');
}

module.exports = showSplashWelcome;