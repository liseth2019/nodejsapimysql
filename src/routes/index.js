import {Router} from "express";

import {ping} from '../controllers/index.js'
const router = new Router();

router.get('/ping', ping);

export default router