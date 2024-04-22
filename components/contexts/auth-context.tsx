import { getMe } from "@/api/user";
import React, { createContext, useContext, useState, useEffect } from "react";

export interface IUser {
  email: string;
  phone: string;
  firstName: string;
  lastName: string;
  nickname?: string;
  company?: string;
  password: string;
}

interface AuthContextType {
  user: IUser | null;
  isLoading: boolean;
  error: Error | null;
  refreshUser: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<IUser | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  const refreshUser = async () => {
    try {
      const userData = await getMe();
      setUser(userData);
      setError(null);
    } catch (err) {
      setUser(null);
      setError(err as Error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    refreshUser(); // Call on component mount to fetch user data
  }, []);

  const value = { user, isLoading, error, refreshUser };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
