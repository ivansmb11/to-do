export interface UserLogin {
  username:  string;
  password?: string;
}

export interface UserLogged {
  uid:      string;
  username: string;
  name:     string;
  lastName: string;
}

export interface User extends UserLogin {
  name:     string;
  lastName: string;  
}
