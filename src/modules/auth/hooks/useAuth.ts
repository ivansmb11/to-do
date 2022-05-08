import { useStore } from 'vuex';
import { UserLogin } from '../../../models/userLogin';

export const useAuth = () => {

  const store = useStore();

  const loginUser = async( user: UserLogin ) => {
    return await store.dispatch('auth/loginUser', user);
  }

  return {
    loginUser
  }

}
