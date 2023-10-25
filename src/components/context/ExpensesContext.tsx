import React, { createContext, useContext, useState } from 'react'

interface Props {
  children: React.ReactNode
}

interface ExpensesContextType {
  mortgageOrRent: number
  foodAndGroceries: number
  setMortgageOrRent: React.Dispatch<React.SetStateAction<number>>
  setFoodAndGroceries: React.Dispatch<React.SetStateAction<number>>
}

const ExpensesContext = createContext<ExpensesContextType | undefined>(undefined)

export const ExpensesContextProvider: React.FC<Props> = ({ children }) => {
  const [mortgageOrRent, setMortgageOrRent] = useState(0)
  const [foodAndGroceries, setFoodAndGroceries] = useState(0)

  return (
    <ExpensesContext.Provider value={{ mortgageOrRent, foodAndGroceries, setMortgageOrRent, setFoodAndGroceries }}>
      {children}
    </ExpensesContext.Provider>
  )
}

export const useExpenses = () => {
  const context = useContext(ExpensesContext)

  if (!context) {
    throw new Error('useExpenses must be used within an ExpensesProvider')
  }

  return context
}
