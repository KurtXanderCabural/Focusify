"use client";

import React, {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { usePathname, useRouter } from "next/navigation";
import { getUserCookie, setUserCookie, removeUserCookie } from "@/lib/cookies";

export type AuthContextType = {
  user: User;
  onLogin: (user: User) => Promise<void>;
  onLogout: () => Promise<void>;
  isLoading: boolean;
};

export enum Role {
  USER = "USER",
  ADMIN = "ADMIN",
}

type Authority = {
  authority: Role;
};

export type UserDetails = {
  id?: number;
  username?: string;
  password?: string;
  name?: string;
  profilePicture?: string;
  hoursStudied?: number;
  role?: Role;
  enabled?: true;
  authorities?: Authority[];
  credentialsNonExpired?: boolean;
  accountNonExpired?: boolean;
  accountNonLocked?: boolean;
};

export type User = {
  userDetails?: UserDetails | null;
  token?: string | null;
  isAuthenticated?: boolean;
};

type AuthProviderProps = {
  children: ReactNode;
};

export const defaultUserValue: User = {
  userDetails: null,
  token: null,
  isAuthenticated: false,
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<User>(defaultUserValue);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const pathName = usePathname();
  const { push } = useRouter();

  const onLogout = useCallback(async () => {
    setIsLoading(true);
    await removeUserCookie();
    setUser(defaultUserValue);
    setIsLoading(false);

    try {
      localStorage.removeItem("user");
    } catch {
      // ignore
    }
  }, []);

  const onLogin = useCallback(async ({ userDetails, token }: User) => {
    const newUser: User = { userDetails, token, isAuthenticated: true };
    setUser(newUser);
    await setUserCookie(newUser);
  }, []);

  useEffect(() => {
    const updateUser = async () => {
      const cookiesUser = await getUserCookie();

      if (!cookiesUser?.isAuthenticated) {
        await onLogout();
        return;
      }

      setUser(cookiesUser);
      setIsLoading(false);
    };

    updateUser();
  }, [onLogout]);

  useEffect(() => {
    if (!isLoading && !user.isAuthenticated && ["/main", "/profile"].includes(pathName)) {
      push("/");
    }
  }, [user.isAuthenticated, isLoading, pathName, push]);

  const value: AuthContextType = { user, onLogin, onLogout, isLoading };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default function useAuth(): AuthContextType {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }

  return context;
}
