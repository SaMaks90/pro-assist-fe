import { createContext } from "react";
import { IUser } from "../types";

interface IAuthContext {
  token: string | null;
  user: IUser | null;
  setToken?: (token: string) => void;
  setUser?: (user: object) => void;
  logOut?: () => void;
}

const AuthContext = createContext<IAuthContext>({
  token: "",
  user: null,
});

export { AuthContext };
