import { router } from '@/main';
import LocaleSelectorComponent from '../locale-selector/locale-selector.component.vue';

export default {
    name: 'HeaderComponent',
    components: { LocaleSelectorComponent },
    methods: {
        goHome() {
            router.push('/books');
        }
    }
};
