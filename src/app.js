import express from 'express';
import Config from './env.js';
import cors from './middlewaries/cors.js'
import notFoundError from './middlewaries/notFoundError.js';
import workspace from './routes/workspace.js';

export default class App {
    port =  Config.port;
    app = null;

    constructor() {
        this.app = express();

        this.app.use(express.json());
        this.app.use(cors);

        this.app.use('/workspace', workspace);

        this.app.use(notFoundError);
    }

    start() {
        this.app.listen(this.port, () => {
            console.log(`⚡️[server]: Server is running at http://localhost:${this.port}`);
        })
    }
}