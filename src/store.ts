import { createLogger, Store } from 'vuex';

import booksStore from './modules/books/store';

const debug = process.env.NODE_ENV !== 'production';

export default new Store({
    modules: {
        booksStore
    },
    strict: debug,
    plugins: debug ? [createLogger()] : []
});
