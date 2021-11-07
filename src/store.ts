import { createStore, createLogger } from 'vuex';
import booksStore from './modules/books/store';

const debug = process.env.NODE_ENV !== 'production';

export default createStore({
    modules: {
        booksStore
    },
    strict: debug,
    plugins: debug ? [createLogger()] : []
});
