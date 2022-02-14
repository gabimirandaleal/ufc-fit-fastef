import axios from "axios";
import {
    createContext,
    ReactNode,
    useCallback,
    useContext,
    useState,
  } from "react";
  import toast from "react-hot-toast";
  
  import { api } from "../../Services/api";
  
  interface AuthProviderProps {
    children: ReactNode;
  }
  
  interface User {
    email: string;
    id: string;
    name: string;
  }
  
  interface AuthState {
    accessToken: string;
    user: User;
  }
  
  interface SignInCredentials {
    email: string;
    password: string;
  }
  
  interface SignUpCredentials {
    email: string;
    password: string;
    name: string;
  }

  interface AuthContextData {
    user: User;
    accessToken: string;
    signIn: (credentials: SignInCredentials) => Promise<void>;
    signUp: (credentials: SignUpCredentials) => void;
    signOut: () => void;
  }
  
  const AuthContext = createContext<AuthContextData>({} as AuthContextData);
  
  const useAuth = () => {
    const context = useContext(AuthContext);
  
    if (!context) {
      throw new Error("useAuth must be used within an AuthProvider");
    }
  
    return context;
  };
  
  const AuthProvider = ({ children }: AuthProviderProps) => {
    const [data, setData] = useState<AuthState>(() => {
      const accessToken = localStorage.getItem("@UFCBurguer:accessToken");
      const user = localStorage.getItem("@UFCBurguer:user");
  
      if (accessToken && user) {
        return { accessToken, user: JSON.parse(user) };
      }
  
      return {} as AuthState;
    });
  
    const signIn = useCallback(async ({ email, password }: SignInCredentials) => {
      const response = await api.post("/login", { email, password });
      const { accessToken, user } = response.data;
      toast.success("Bem-vindo, vamo comer?!", {style: {
        borderRadius: '10px',
        background: '#333',
        color: '#fff',
      },})
      localStorage.setItem("@UFCBurguer:accessToken", accessToken);
      localStorage.setItem("@UFCBurguer:user", JSON.stringify(user));
  
      setData({ accessToken, user });
    }, []);

    const signUp = ({ email, password, name }: SignUpCredentials) => {
        api
            .post("/signup/", {email, password, name})
            .then((response) => console.log(response.data))
            .catch((err) => console.log(err))
    };
  
    const signOut = useCallback(() => {
      localStorage.removeItem("@UFCBurguer:accessToken");
      localStorage.removeItem("@UFCBurguer:user");
  
      setData({} as AuthState);
    }, []);
  
    return (
      <AuthContext.Provider
        value={{
            accessToken: data.accessToken,
            user: data.user,
            signIn,
            signOut,
            signUp,
        }}
      >
        {children}
      </AuthContext.Provider>
    );
  };
  
  export { AuthProvider, useAuth }