import { BookInterface } from '../../models';

export default {
    name: 'BookPreviewComponent',
    props: {
        books: Array as () => BookInterface[]
    }
};
