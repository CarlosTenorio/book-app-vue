import { BookInterface } from '.';

export interface StateInterface {
    books: BookInterface[];
    loadingBooks: boolean;
}
