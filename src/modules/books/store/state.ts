import { StateInterface } from '../models';

const state = () =>
    ({
        books: [],
        loadingBooks: false
    } as StateInterface);

export default state;
