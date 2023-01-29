import { Router } from 'express';

const router = Router();


router.get('/employees', (req, res) => {
    res.send("gray");
});

/*router.get('/sing', (req, res) => {
    try {
        res.render('../view/sing-in/sing-in');
    } catch (error) {
        res.json({message: "Page not found", error: error});
    }
});
*/

export default router;