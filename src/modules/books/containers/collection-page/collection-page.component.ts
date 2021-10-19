import { router } from '../../../../main';

export default {
    name: 'CollectionPage',
    methods: {
        goToSearch() {
            router.push('/books/search');
        }
    }
};
