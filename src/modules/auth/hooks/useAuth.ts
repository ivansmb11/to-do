import { useStore } from 'vuex';
import { UserLogin, User } from '../../../models/user';

export const useAuth = () => {

  const store = useStore();

  const loginUser = async( user: UserLogin ) => {
    return await store.dispatch('auth/loginUser', user);
  }

  const createUser = async( user: User ) => {
    return await store.dispatch('auth/createUser', user);
  }

  return {
    loginUser,
    createUser
  }

}
