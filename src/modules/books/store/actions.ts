import axios, { AxiosResponse } from 'axios';
import { RequestInterface } from '../models';

const actions = {
    async searchBook({ state, commit }: any, queryTitle: string) {
        axios
            .get(`${process.env.VUE_APP_GOOGLE_API}/books/v1/volumes?q=${queryTitle}`)
            .then((request: AxiosResponse<RequestInterface>) => {
                commit('setBooks', request.data.items);
            });
    }
};
export default actions;
