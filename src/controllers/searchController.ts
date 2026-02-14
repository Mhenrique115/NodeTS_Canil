import type { Request, Response } from 'express';
import { createMenuObj } from '../helpers/createMenuObj.js';
import { Pet } from '../models/Pet.js';

export const search = (req: Request, res: Response) => {
    let query: string = req.query.q as string;
    
    if(!query) {
        res.redirect('/')
        return;
    }

    let list = Pet.getFromName (query);

    res.render('pages/page', {
        menu: createMenuObj(''),
        list,
        query
    })
    
};


