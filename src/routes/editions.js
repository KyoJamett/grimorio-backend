import { Router } from 'express';
import { getEdition } from '../services/apiEditions.js';

const router = Router();

router.get('/edition/:ed', async (req, res) => {
  try {
    const data = await getEdition(req.params.ed);
    if (!data) return res.status(404).json({ error: 'Edición no encontrada' });
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;