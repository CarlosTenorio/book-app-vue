import axios, { AxiosResponse } from 'axios';
import { BookInterface } from '../models';

const actions = {
    async searchBook({ commit }: any) {
        axios.get(`${process.env.GOOGLE_API}/books/v1/volumes`).then((request: AxiosResponse<BookInterface[]>) => {
            console.log('response', request.data);
            commit('setProducts', request.data);
        });
    }
};
export default actions;
