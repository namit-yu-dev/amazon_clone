import React, { createContext, useContext, useReducer } from "react";

//prepare the data layer
export const StateContext = createContext();

//wrap our app and provid the data layer
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

//pull information
export const useStateValue = () => useContext(StateContext);
