import { useMemo, ReactNode } from "react";
import { useCookies } from "react-cookie";
import { AuthContext } from "../context";

interface IAuthProviderProps {
  children: ReactNode;
}

const AuthProvider = ({ children }: IAuthProviderProps) => {
  const [cookies, setCookies, removeCookie] = useCookies(["token", "user"]);

  const setToken = (token: string): void => {
    if (token) {
      setCookies("token", token, {
        expires: new Date(new Date().getTime() + 7200000),
      });
    } else {
      removeCookie("token");
      removeCookie("user");
    }
  };

  const setUser = (user: object): void => {
    setCookies("user", user);
  };

  const logOut = (): void => {
    removeCookie("token");
    removeCookie("user");
  };

  const contextValue = useMemo(
    () => ({
      token: cookies.token,
      user: cookies.user,
      setToken,
      setUser,
      logOut,
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  );

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

export { AuthProvider };
