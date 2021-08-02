import {Router} from 'express';
const router = Router();

router.get('/', (req,res)=>{
    res.send('Que pasa mi prro sirvase'); 
});

export default router;