import { BookInterface, StateInterface } from '../models';

const getters = {
    getBooks(state: StateInterface): BookInterface[] {
        return state.books;
    }
};
export default getters;
