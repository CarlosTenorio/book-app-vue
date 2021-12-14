import { router } from '@/main';

export default {
    name: 'CollectionPageComponent',
    methods: {
        goToSearch() {
            router.push('/books/search');
        }
    }
};
