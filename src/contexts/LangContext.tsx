// LangContext.tsx
import React, { createContext, useContext, useState, ReactNode } from "react";

type Lang = "en" | "es";
type LangContextProps = {
	lang: Lang;
	setLang: (lang: Lang) => void;
};

const LangContext = createContext<LangContextProps | undefined>(undefined);

export const LangProvider: React.FC<{ children: ReactNode }> = ({
	children,
}) => {
	const [lang, setLang] = useState<Lang>("en");

	return (
		<LangContext.Provider value={{ lang, setLang }}>
			{children}
		</LangContext.Provider>
	);
};

export const useLang = () => {
	const context = useContext(LangContext);
	if (!context) {
		throw new Error("useLang must be used within a LangProvider");
	}
	return context;
};
