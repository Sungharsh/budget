import React, { createContext, useContext } from 'react'
import { useImmerReducer } from 'use-immer'

import { AppReducer } from '../../store/AppReducer'
import { AppState } from '../../store/AppState'
import { Action } from '../Types'

export interface IncomeExpenseContextProps {
  state: typeof AppState
  dispatch: React.Dispatch<Action>
}

interface IncomeExpenseProviderProps {
  children: React.ReactNode
}
export const IncomeExpenseContext = createContext<IncomeExpenseContextProps | undefined>(undefined)

export const IncomeExpensesContextProvider: React.FC<IncomeExpenseProviderProps> = ({ children }) => {
  const [state, dispatch] = useImmerReducer(AppReducer, AppState)
  return <IncomeExpenseContext.Provider value={{ state, dispatch }}>{children}</IncomeExpenseContext.Provider>
}

export const useIncomeExpenses = () => {
  const context = useContext(IncomeExpenseContext)

  if (!context) {
    throw new Error('useExpenses must be used within an IncomeExpensesProvider')
  }

  return context
}
