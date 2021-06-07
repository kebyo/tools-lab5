import cron from 'node-cron';
import ping from 'ping';
import Config from '../env.js';
import WorkspaceService from '../services/workspace.js';

export default class PingHosts {
    schedule = Config.pingSchedule || "*/2 * * * *";
    scheduledTask = null;

    constructor() {
        this.scheduledTask = cron.schedule(this.schedule, this.task, {
            scheduled: false,
        });
    }

    async task() {
        const workpsaces = await WorkspaceService.findAll();

        for (const workpsace of workpsaces) {
            const updatedHosts = [];

            for (const host of workpsace.hosts) {
                const isAlive = (await ping.promise.probe(host)).alive;

                host.isAlive = isAlive;

                updatedHosts.push(host);
            }

            workspace.hosts = updatedHosts;

            await WorkspaceService.update(workspace._id, workspace);
        }
    }

    startPing() {
        this.scheduledTask.start();

        console.log('️👀 [ping]: ping started');
    }

    stopPing() {
        this.scheduledTask.stop();

        console.log('️👀 [ping]: ping stopped')
    }
}