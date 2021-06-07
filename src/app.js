import express from 'express';
import Config from './env.js';
import cors from './middlewaries/cors.js'
import notFoundError from './middlewaries/notFoundError.js';

export default class App {
    port =  Config.port;
    app = null;

    constructor() {
        this.app = express();

        this.setup();
    }

    setup() {
        this.app.use(express.json());
        this.app.use(cors);
        this.app.use(notFoundError);
    }

    start() {
        this.app.listen(this.port, () => {
            console.log(`⚡️Server is running at http://localhost:${this.port}`);
        })
    }
}