export interface IUser {
  blocked: boolean;
  confirmed: boolean;
  createdAt: Date;
  email: string;
  id: number;
  provider: string;
  updatedAt: Date;
  username: string;
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
