import express from "express";
import {getallusers, login, signup} from '../controllers/user-controller';

const router = express.Router()

router.get('/',getallusers)
router.post('/signup',signup)
router.post('/login',login)

export default router;

// module.exports = router