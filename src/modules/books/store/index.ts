import state from './state';
import actions from './actions';
import mutations from './mutations';

const booksStore = {
    namespaced: true,
    state,
    actions,
    mutations
};

export default booksStore;
