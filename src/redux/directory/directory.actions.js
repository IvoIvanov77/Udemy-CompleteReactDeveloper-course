import { DirectoryActionTypes } from './directory.types';

export const loadCategories = items => ({
    type: DirectoryActionTypes.LOAD_CATEGORIES,
    payload: items
});

