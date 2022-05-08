import { Commit } from 'vuex';
import axios from 'axios';
import authApi from '../../../api/authApi';
import { UserLogin, UserLogged } from '../../../models/user';

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
      return { ok: false, msg: error.message || 'Ha ocurrido un error' };
    } else {
      return { ok: false, msg: 'Ha ocurrido un error' };
    }
  }
}
