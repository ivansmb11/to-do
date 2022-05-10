import toDoApi from '../../../api/toDoApi';
import { useStore } from 'vuex';
import { computed } from 'vue';
import { getUserId } from '../../auth/store/getters';


export const useToDo = () => {

    const store = useStore();

    const getPending = async () => { 
        const userId = store.getters['auth/getUserId'];
        const { data } = await toDoApi.get(`/${userId}`);
        return data;
    }

    return {
        getPending
    }

}