export interface IUser {
  lastName: string;
  firstName: string;
  type: string;
}

export interface ILoginFormInputs {
  email: string;
  password: string;
}

export interface ILoginResponse {
  jwt: string;
  user: object;
}

export interface IRegistrationFormInputs {
  username: string;
  password: string;
  confirmPassword: string;
  email: string;
}

export interface IRegistrationResponse {
  jwt: string;
  user: object;
}
