import { createContext, useContext, useState, ReactNode } from 'react';

interface AuthContextType {
    user: any;
    captain: any;
    signInUser: (data: any) => void;
    signInCaptain: (data: any) => void;
    signOut: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [user, setUser] = useState(null);
    const [captain, setCaptain] = useState(null);

    const signInUser = (data: any) => {
        setUser(data);
        setCaptain(null);
    };

    const signInCaptain = (data: any) => {
        setCaptain(data);
        setUser(null);
    };

    const signOut = () => {
        setUser(null);
        setCaptain(null);
    };

    return (
        <AuthContext.Provider value={{ user, captain, signInUser, signInCaptain, signOut }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};