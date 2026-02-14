import type { Request, Response } from 'express';
import { createMenuObj } from '../helpers/createMenuObj.js';
import { Pet } from '../models/Pet.js';


export const home = (req: Request, res: Response) => {
    let list = Pet.getAll()

    res.render('pages/page', {

        menu: createMenuObj ('all'),
        banner: {
            title: 'Todos os animais',
            background: 'allanimals.jpg'
        },
        list
        
    });
};

export const dogs = (req: Request, res: Response) => {
    let list = Pet.getFromType('dog')
    
    res.render('pages/page', {
        menu: createMenuObj ('dogs'),
        banner: {
            title: 'Cachorros',
            background: 'banner_dog.jpg'
        },
        list
    });

};

export const cats = (req: Request, res: Response) => {
    let list = Pet.getFromType('cat')

    res.render('pages/page', {
        menu: createMenuObj ('cats'),
        banner: {
            title: 'Gatos',
            background: 'banner_cat.jpg'
        },
        list
    });
};

export const fishes = (req: Request, res: Response) => {
    let list = Pet.getFromType('fish')
    
    res.render('pages/page', {
        menu: createMenuObj ('fishes'),
        banner: {
            title: 'Peixes',
            background: 'banner_fish.jpg'
        },
        list
    });
};
