import { UserLogged } from './user';

export interface AuthState {
  status: string;
  user:   UserLogged  | null;
  token:  string      | null;
}
