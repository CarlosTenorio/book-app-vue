import store from '@/store';
import { defineComponent } from 'vue';
import { mapGetters } from 'vuex';

export default defineComponent({
    name: 'FindBookPageComponent',
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
        ...mapGetters({ books: 'booksStore/getBooks' })
    }
});
