import { Commit } from 'vuex';
import axios from 'axios';
import authApi from '../../../api/authApi';
import { UserLogin, UserLogged, User } from '../../../models/user';

export const loginUser = async({ commit }: { commit: Commit }, user: UserLogin ) => {
  
  const { username, password } = user;
  
  try {
    const { data } = await authApi.post( '', { username, password } );
    const { token } = data;

    delete data.token;

    const user: UserLogged = { ...data };

    commit( 'loginUser', { user, token } );
    return { ok: true, msg: 'Has iniciado sesión correctamente' };

  } catch ( error ) {

    if ( axios.isAxiosError( error ) ) {
      const { msg } = error.response?.data as any || 'Ha ocurrido un error';
      return { ok: false, msg };
    } else {
      return { ok: false, msg: 'Ha ocurrido un error' };
    }
  }
}

export const createUser = async({ commit }: { commit: Commit }, user: User ) => {

  try {
    const { data } = await authApi.post( '/create', user );
    const { token } = data;

    delete user.password;

    commit( 'loginUser', { user, token } );
    return { ok: true, msg: 'Usuario creado correctamente' };

  } catch ( error ) {
    
    if ( axios.isAxiosError( error ) ) {
      const { msg } = error.response?.data as any || 'Ha ocurrido un error';
      return { ok: false, msg };
    } else {
      return { ok: false, msg: 'Ha ocurrido un error' };
    }

  }


}
