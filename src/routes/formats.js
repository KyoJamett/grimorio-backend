import { Router } from 'express';
import { formatos, documentos } from '../services/apiFormats.js';

const router = Router();

router.get('/formats', async (req, res) => {
    res.json(formatos);
});

router.get('/formats/:folder/documents', (req, res) => {
    const cat = documentos.find(d => d.categoria === req.params.folder);
    res.json(cat?.documentos ?? []);
})

export default router;