//this entire file is for the react context api. This file makes all of the information that relates to the user, easier to use inside of the app.

import React, { createContext, useContext, useReducer } from "react";

export const StateContext = createContext();

export const StateProvider = ({ reducer, initialState, children }) => (
	<StateContext.Provider value={useReducer(reducer, initialState)}>
		{children}
	</StateContext.Provider>
);

export const useStateValue = () => useContext(StateContext);
