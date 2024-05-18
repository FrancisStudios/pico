const { App } = require('../config/config.json');

const indexTransformBootstrap = () => {
    document.querySelector('title').innerHTML = App.window.title;
}

module.exports = {
    indexTransformBootstrap
}