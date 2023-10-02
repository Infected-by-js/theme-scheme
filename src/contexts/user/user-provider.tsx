import api from "@/api";
import { User } from "@/types";
import {
  FC,
  PropsWithChildren,
  createContext,
  useEffect,
  useMemo,
  useState,
} from "react";

interface Context {
  user: User | null;
  isLoading: boolean;
}

export const UserContext = createContext({} as Context);

export const UserProvider: FC<PropsWithChildren> = ({ children }) => {
  const DEFAULT_USER_ID = "1";

  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    api.get
      .user<User>(DEFAULT_USER_ID)
      .then((user) => setUser(user))
      .finally(() => setIsLoading(false));
  }, []);

  const value = useMemo(
    () => ({
      user,
      isLoading,
    }),
    [user, isLoading]
  );

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
