import React, { createContext, useReducer} from 'react';
import AppReducer from './AppReducer'

//Initial State
const initialState = {
    transactions: [
        { id: 1, text: 'Fruit', amount: 20},
        { id: 2, text: 'Choc', amount: -20},
        { id: 3, text: 'Steak', amount: 20},
        { id: 4, text: 'More Steak', amount: 200}
    ]
}

//Create Content 
export const GlobalContext = createContext(initialState);

//Provider Component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  return(
      <GlobalContext.Provider value={{
          transactions: state.transactions
      }}>
          {children}
      </GlobalContext.Provider>
  )
}