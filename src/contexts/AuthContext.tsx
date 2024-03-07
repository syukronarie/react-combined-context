// AuthContext.tsx
import React, { createContext, useContext, useState, ReactNode } from "react";

type User = {
	username: string;
	avatar: string;
};

type AuthContextProps = {
	user: User | null;
	login: (username: string) => void;
	logout: () => void;
};

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({
	children,
}) => {
	const [user, setUser] = useState<User | null>(null);

	const login = (username: string) => {
		setUser({
			username,
			avatar: `https://avatars.example.com/${username}.png`,
		});
	};

	const logout = () => {
		setUser(null);
	};

	return (
		<AuthContext.Provider value={{ user, login, logout }}>
			{children}
		</AuthContext.Provider>
	);
};

export const useAuth = () => {
	const context = useContext(AuthContext);
	if (!context) {
		throw new Error("useAuth must be used within an AuthProvider");
	}
	return context;
};
