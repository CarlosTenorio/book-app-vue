import actions from '../../store/actions';
import { defineComponent } from 'vue';

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
            actions.searchBook(this.search);
        }
    }
});
