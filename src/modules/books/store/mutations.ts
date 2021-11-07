import { BookInterface, StateInterface } from '../models';

const mutations = {
    setBooks(state: StateInterface, books: BookInterface[]) {
        state.books = books;
    }
};

export default mutations;
