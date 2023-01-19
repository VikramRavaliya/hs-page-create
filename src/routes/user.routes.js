import express from 'express';

import userController from '../controllers/user.controller.js';

const router = express.Router();

router.get('/add/page', (userController.showPage));
router.post('/page', (userController.post));


export default router;