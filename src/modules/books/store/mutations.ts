import { BookInterface } from '../models';

const mutations = {
    setBooks(state: any, books: BookInterface[]) {
        state.books = books;
    }
};

export default mutations;
