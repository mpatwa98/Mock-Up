"use client";
import { createContext, useContext, useState, ReactNode } from "react";

interface FormContextType {
	onBoardingText: string | undefined;
	onBoardingDescription: string | undefined;
	setOnBoardingText: (text: string | undefined) => void;
	setOnBoardingDescription: (description: string | undefined) => void;
}

const FormContext = createContext<FormContextType | undefined>(undefined);

export const useFormContext = (): FormContextType => {
	const context = useContext(FormContext);
	if (!context) {
		throw new Error("useFormContext must be used within a FormProvider");
	}
	return context;
};

interface FormProviderProps {
	children: ReactNode;
}

export const FormProvider = ({ children }: FormProviderProps) => {
	const [onBoardingText, setOnBoardingText] = useState<string | undefined>();
	const [onBoardingDescription, setOnBoardingDescription] = useState<
		string | undefined
	>();

	const contextValue: FormContextType = {
		onBoardingText,
		onBoardingDescription,
		setOnBoardingText,
		setOnBoardingDescription,
	};

	return (
		<FormContext.Provider value={contextValue}>{children}</FormContext.Provider>
	);
};
