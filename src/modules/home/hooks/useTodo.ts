import toDoApi from '../../../api/toDoApi';
import { useStore } from 'vuex';
import { computed } from 'vue';


export const useToDo = () => {

    const store = useStore();

    const getPending = async () => {
        const id = computed(() => store.getters['auth/getUserId']);
        const { data } = await toDoApi.get(`/${id}`);
        console.log(id);
        return data;
    }

    return { getPending }

}