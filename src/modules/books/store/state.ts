import { BookInterface, StateInterface } from '../models';

const state = () =>
    ({
        books: []
    } as StateInterface);

export default state;
