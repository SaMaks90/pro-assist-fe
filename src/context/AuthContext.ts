import { createContext } from "react";

interface IAuthContext {
  token: string | null;
  user: object | null;
  setToken?: (token: string) => void;
  setUser?: (user: object) => void;
  logOut?: () => void;
}

const AuthContext = createContext<IAuthContext>({
  token: "",
  user: null,
});

export { AuthContext };
