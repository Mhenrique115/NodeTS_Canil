import { Router } from 'express';
import { home, dogs, cats, fishes } from '../controllers/pageController.js';
import { search } from '../controllers/searchController.js';


const router = Router();

router.get('/', home); 
router.get('/dogs', dogs);
router.get('/cats', cats);
router.get('/fishes', fishes);


router.get('/search', search);



export default router;