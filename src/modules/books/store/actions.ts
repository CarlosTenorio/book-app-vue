import axios from 'axios';

const actions = {
    async searchBook({ commit }) {
        axios.get(`${process.env.GOOGLE_API}/books/v1/volumes`).then((books: Book[]) => {
            console.log('response', books);
            commit('setProducts', books);
        });
    }
};
export default actions;
