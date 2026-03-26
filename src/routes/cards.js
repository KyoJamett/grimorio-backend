import { Router } from 'express';
import { getCard } from '../services/apiCards.js';

const router = Router();

router.get('/cards/:ed_edid/:edid', async (req, res) => {
    try {
        const { ed_edid, edid } = req.params;
        const buffer = await getCard(ed_edid, edid);
        
        res.setHeader('Content-Type', 'images/png');
        res.send(buffer);
    } catch (error) {
        res.status(500).json({ error: err.message });
    }
})

export default router;