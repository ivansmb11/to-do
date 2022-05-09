import { AuthState } from '../../../models/authState';
import { UserLogged } from '../../../models/user';

export const currentState = ( state: AuthState ) => {
  return state.status;
}

export const getUser = ( state: AuthState ) => {
  return state.user || '';
}

export const getFullName = ({ user }: { user: UserLogged }) => {
  return `${ user?.name } ${ user?.lastName }` || '';
}
