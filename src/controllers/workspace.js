import WorkspaceService from '../services/workspace.js';

export default class WorkspaceController {
    static async create(req, res) {
        const workspace = await WorkspaceService.create(req.body.workspace);

        return res.json({
            workspace,
        })
    }
    static async get(req, res) {
        const workspace = await WorkspaceService.findById(req.params.id);

        return res.json({
            workspace,
        })
    }
    static async update(req, res) {
        const workspace = await WorkspaceService.update(req.params.id, req.body.workspace);

        return res.json({
            workspace,
        })
    }
    static async remove(req, res) {
        const workspace = WorkspaceService.remove(req.params.id);

        return res.json({
            success: !!workspace,
        })
    }
}