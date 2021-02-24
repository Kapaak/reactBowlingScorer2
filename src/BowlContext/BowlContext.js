import { useState, createContext } from "react";
import bowl from "bowling";

export const BowlContext = createContext();

export const BowlProvider = ({ children }) => {
	const [gameProgress, setGameProgress] = useState([]);
	const result = bowl(gameProgress);
	return (
		<BowlContext.Provider value={[result, gameProgress, setGameProgress]}>
			{children}
		</BowlContext.Provider>
	);
};
