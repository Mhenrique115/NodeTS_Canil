type MenuOptions = '' | 'all' | 'dogs' | 'cats' | 'fishes';

export const createMenuObj = (activeMenu: MenuOptions) => {
    let returnObj = {
        all: false,
        dogs: false,
        cats: false,
        fishes: false
    };

    if (activeMenu !== '') {
        returnObj[activeMenu] = true;
    }

    return returnObj;
};
