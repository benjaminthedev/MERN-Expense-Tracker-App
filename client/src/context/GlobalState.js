import React, { createContext, useReducer} from 'react';
import AppReducer from './AppReducer'
import axios from 'axios';

//Initial State
const initialState = {
    transactions: [],
    error: null, 
    loading: true
}

//Create Content 
export const GlobalContext = createContext(initialState);

//Provider Component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  //Actions GET
  async function getTransactions(){
      try {
          const response = await axios.get('/api/v1/transactions');
          
          dispatch({
              type: 'GET_TRANSACTIONS',
              payload: res.data.data
          }); 
      } catch (err) {
            dispatch({
              type: 'TRANSACTION_ERROR',
              payload: err.response.data.error
            }); 
      }
  }

    //Actions - Delete
    function deleteTransaction(id){
        dispatch({
            type: 'DELETE_TRANSACTION',
            payload: id
        });
    }

    //Actions - Add
    function addTransaction(transaction){
        dispatch({
            type: 'ADD_TRANSACTION',
            payload: transaction
        });
    }

  return(
      <GlobalContext.Provider value={{
          transactions: state.transactions,
          error: state.error,
          loading: state.loading,
          getTransactions,
          deleteTransaction,
          addTransaction          
      }}>
          {children}
      </GlobalContext.Provider>
  )
}