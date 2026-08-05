"use client";

import {
    createContext,
    useEffect,
    useState,
    ReactNode,
} from "react";

import {
    login as loginUser,
    logout as logoutUser,
    getUser,
} from "@/lib/auth";

import { User } from "@/types/auth";


interface AuthContextType {
    user: User | null;
    loading: boolean;
    loggingOut: boolean;
    login: (
        login: string,
        password: string
    ) => boolean;
    logout: () => void;
}


export const AuthContext = createContext<AuthContextType | null>(null);



export function AuthProvider({
    children,
}: {
    children: ReactNode;
}) {


    const [user, setUser] = useState<User | null>(null);

    const [loading, setLoading] = useState(true);

    const [loggingOut, setLoggingOut] = useState(false);

    useEffect(() => {

        const currentUser = getUser();

        setUser(currentUser);

        setLoading(false);

    }, []);




    function login(
        login: string,
        password: string
    ) {

        const user = loginUser(
            login,
            password
        );


        if (!user) {
            return false;
        }


        setLoggingOut(false);

        setUser(user);

        return true;
    }




    function logout() {
        setLoggingOut(true);

        logoutUser();

        setUser(null);

    }




    return (
        <AuthContext.Provider
            value={{
                user,
                loading,
                loggingOut,
                login,
                logout,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
}