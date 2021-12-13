import { router } from '@/main';

export default {
    name: 'Header',
    methods: {
        goHome() {
            router.push('/books');
        }
    }
};
