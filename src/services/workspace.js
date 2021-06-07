import Workspace from '../database/models/workspace.js';

export default class WorkspaceService {
    static async create(workspace) {
        const ws = new Workspace(workspace);

        return ws.save();
    }

    static async findById(id) {
        return Workspace.findById(id);
    }

    static async findAll() {
        return Workspace.find();
    }

    static async remove(id) {
        return Workspace.findOneAndDelete({_id: id});
    }

    static async update(id, updatedWorkspace) {
        return Workspace.findOneAndUpdate({_id: id}, {
            $set: updatedWorkspace,
        }, {
            new: true,
        });
    }
}