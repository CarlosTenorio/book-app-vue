import store from '@/store';
import { defineComponent } from 'vue';
import { mapGetters } from 'vuex';
import { Form, Field, ErrorMessage } from 'vee-validate';
import SpinnerComponent from '@/modules/shared/components/spinner/spinner.component.vue';
import BookPreviewComponent from '@/modules/books/components/book-preview-list/book-preview-list.component.vue';

export default defineComponent({
    name: 'FindBookPageComponent',
    components: { SpinnerComponent, BookPreviewComponent, Form, Field, ErrorMessage },
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
        },
        onSubmit(values: { [key: string]: string }) {
            this.searchBook();
        },
        validateForm(value: string) {
            if (!value) {
                return this.$t('books.search-required');
            }
            return true;
        }
    },
    computed: {
        ...mapGetters({ books: 'booksStore/getBooks', loadingBooks: 'booksStore/getLoadingBooks' })
    }
});
