import { BookInterface, StateInterface } from '../models';

const mutations = {
    setBooks(state: StateInterface, books: BookInterface[]) {
        state.books = books;
    },
    setLoadingBooks(state: StateInterface, loading: boolean) {
        state.loadingBooks = loading;
    }
};

export default mutations;
