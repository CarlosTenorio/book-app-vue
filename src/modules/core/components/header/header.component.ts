import { router } from '@/main';

export default {
    name: 'HeaderComponent',
    methods: {
        goHome() {
            router.push('/books');
        }
    }
};
