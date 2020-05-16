/**
 * The Server routes
 *
 * @author Yurii Huriianov <yuhur1985@gmail.com
 * @copyright 2020
 */

import express from 'express';

const router = express.Router();

router.post('/register', (req, res) => {
    console.log(req.session);
    res.send('ok');
});

export default router;
