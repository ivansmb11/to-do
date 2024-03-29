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
    return { ok: true, msg: 'login successful' };
    
  } catch ( error ) {
    
    if ( axios.isAxiosError( error ) ) {
      const { msg } = error.response?.data as any || 'an error has happened';
      return { ok: false, msg };
    } else {
      return { ok: false, msg: 'an error has happened' };
    }
  }
}

export const createUser = async({ commit }: { commit: Commit }, user: User ) => {
  
  try {
    const { data } = await authApi.post( '/create', user );
    const { token } = data;
    
    delete user.password;
    
    commit( 'loginUser', { user, token } );
    return { ok: true, msg: 'user created successfully' };
    
  } catch ( error ) {
    
    if ( axios.isAxiosError( error ) ) {
      const { msg } = error.response?.data as any || 'an error has happened';
      return { ok: false, msg };
    } else {
      return { ok: false, msg: 'an error has happened' };
    }
    
  }
  
}

export const checkAuth = async ({ commit }: { commit: Commit }) => {
  
  const token = localStorage.getItem('token');
  
  if ( !token ) {
    commit('logout');
    return { ok: false, msg: 'there is no token' };
  }
  
  try {

    const { data } = await authApi.get( 'renew',  {
      headers: {
        'x-token': token
      }
    });

    const { uid, username, name, lastName } = data;

    const user = {
      uid,
      username,
      name,
      lastName 
    }
    
    commit( 'loginUser', { user, token } );
    
    return { ok: true };
    
  } catch ( error ) {
    
    commit('logout');
    
    if ( axios.isAxiosError( error ) ) {
      const { msg } = error.response?.data as any || 'an error has happened';
      return { ok: false, msg };
    } else {
      return { ok: false, msg: 'an error has happened' };
    }
    
  }  
}
