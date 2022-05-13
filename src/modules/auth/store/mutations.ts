import { AuthState }  from '../../../models/authState';
import { UserLogged } from '../../../models/user';

export const loginUser = ( state: AuthState, { user, token }: { user: UserLogged, token: string } ) => {
  if ( token ) {
    localStorage.setItem( 'token', token );
    state.token = token;
  }
  state.user    = user;
  state.status  = 'authenticated';
}

export const logout = ( state: AuthState ) => {

  state.user    = null;
  state.token   = null;
  state.status  = 'non-authenticated';

  localStorage.removeItem('token');

}
