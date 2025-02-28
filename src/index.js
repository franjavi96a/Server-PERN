import config from './config.js';
import app from './app.js';

const main = () => {
    app.listen(config.PORT, () => {
        console.log(`Server on port ${config.PORT}`)
    })
}

main();

