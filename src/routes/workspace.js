import express from 'express';
import WorkspacesController from '../controllers/workspace.js';

const router = express.Router();

router.get('/', WorkspacesController.getAll);

router.get('/:id', WorkspacesController.get);

router.post('/', WorkspacesController.create);

router.patch('/:id', WorkspacesController.update);

router.delete('/:id', WorkspacesController.remove);

export default router;