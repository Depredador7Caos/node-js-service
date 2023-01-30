import { Router } from 'express';

const router = Router();


router.get('/employees', (req, res) => {
    res.send("gray");
});


export default router;