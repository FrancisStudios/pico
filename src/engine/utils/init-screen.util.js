/* Init HTML canvas and returns handler */
const initScreenGibHandlerBackPls = () => {
    const canvas = document.getElementById('screen');
    const screen = canvas.getContext('2d');

    screen.fillStyle = 'lime';
    screen.fillRect(0, 0, 640, 640);

    return { canvas: canvas, screen: screen };
}

module.exports = initScreenGibHandlerBackPls;