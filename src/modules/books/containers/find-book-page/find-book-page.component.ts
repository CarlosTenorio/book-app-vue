import store from '@/store';
import { defineComponent } from 'vue';
import { mapGetters } from 'vuex';
import SpinnerComponent from '@/modules/shared/components/spinner/spinner.component.vue';

export default defineComponent({
    name: 'FindBookPageComponent',
    components: { SpinnerComponent },
    props: {},
    setup() {},
    data() {
        return {
            search: ''
        };
    },
    methods: {
        searchBook() {
            store.dispatch('booksStore/searchBook', this.search);
        }
    },
    computed: {
        ...mapGetters({ books: 'booksStore/getBooks', loadingBooks: 'booksStore/getLoadingBooks' })
    }
});
