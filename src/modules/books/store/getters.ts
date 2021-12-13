import { BookInterface, StateInterface } from '../models';

const getters = {
    getBooks(state: StateInterface): BookInterface[] {
        return state.books;
    },
    getLoadingBooks(state: StateInterface): boolean {
        return state.loadingBooks;
    }
};
export default getters;
