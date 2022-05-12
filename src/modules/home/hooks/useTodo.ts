import { useStore } from 'vuex';
import toDoApi from '../../../api/toDoApi';
import { ToDo } from '../../../models/toDo';
import axios from 'axios';

export const useToDo = () => {

	const store = useStore();

	const getPending = async () => { 
		const userId = store.getters['auth/getUserId'];
		const { data } = await toDoApi.get(`/${ userId }`);
		return data;
	}

	const createToDo = async ( toDo: ToDo ) => {

		const userId = store.getters['auth/getUserId'];

		try {

			await toDoApi.post( `/${ userId }`, toDo );
			return { ok: true, msg: 'To do creado correctamente' };

		} catch ( error ) {

			if ( axios.isAxiosError( error ) ) {
				const { msg } = error.response?.data as any || 'Ha ocurrido un error';
				return { ok: false, msg };
			} else {
				return { ok: false, msg: 'Ha ocurrido un error' };
			}

		}
	}

	return {
		getPending,
		createToDo
	}

}
