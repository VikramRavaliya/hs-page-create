import express from 'express';

import userController from '../controllers/user.controller.js';

const router = express.Router();

// router.get('/getAll', (userController.allPage));
// router.get('/:id', (userController.getPage));
// router.get('/add', (userController.addPage));
// router.post('/page', (userController.getPage))
router.get('/add/page', (userController.create));
router.post('/page', (userController.post));


export default router;