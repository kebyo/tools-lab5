import mongoose from '../index.js';

const workspaceSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    hosts: [{
        name: {
            type: String,
            required: true,
        },
        isAlive: {
            type: String,
            required: false,
        },
    }],
});



export default mongoose.model('Workspace', workspaceSchema);