import express from 'express';
import Config from './env.js';
import cors from './middlewaries/cors.js'
import notFoundError from './middlewaries/notFoundError.js';
import workspace from './routes/workspace.js';
import PingHosts from './ping/index.js';


export default class App {
    port =  Config.port;
    app = express();
    ping = new PingHosts();

    constructor() {
        this.app.use(express.json());
        this.app.use(cors);

        this.app.use('/workspace', workspace);

        this.app.use(notFoundError);
    }

    start() {
        this.app.listen(this.port, () => {
            console.log(`⚡️[server]: Server is running at http://localhost:${this.port}`);

            this.ping.startPing();

            process.on('SIGINT', () => {
                this.ping.stopPing();

                process.exit();
            })
        })
    }
}