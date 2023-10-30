import React, { createContext, useContext, useState } from 'react'

interface Props {
  children: React.ReactNode
}

interface ExpensesContextType {
  mortgageOrRent: number
  foodAndGroceries: number
  utilities: number
  homeInsurance: number
  childcareAndEducation: number
  holidays: number
  pets: number
  gifts: number
  setMortgageOrRent: React.Dispatch<React.SetStateAction<number>>
  setFoodAndGroceries: React.Dispatch<React.SetStateAction<number>>
  setUtilities: React.Dispatch<React.SetStateAction<number>>
  setHomeInsurance: React.Dispatch<React.SetStateAction<number>>
  setChildcareAndEducation: React.Dispatch<React.SetStateAction<number>>
  setHolidays: React.Dispatch<React.SetStateAction<number>>
  setPets: React.Dispatch<React.SetStateAction<number>>
  setGifts: React.Dispatch<React.SetStateAction<number>>
}

const ExpensesContext = createContext<ExpensesContextType | undefined>(undefined)

export const ExpensesContextProvider: React.FC<Props> = ({ children }) => {
  const [mortgageOrRent, setMortgageOrRent] = useState(0)
  const [foodAndGroceries, setFoodAndGroceries] = useState(0)
  const [utilities, setUtilities] = useState(0)
  const [homeInsurance, setHomeInsurance] = useState(0)
  const [childcareAndEducation, setChildcareAndEducation] = useState(0)
  const [holidays, setHolidays] = useState(0)
  const [pets, setPets] = useState(0)
  const [gifts, setGifts] = useState(0)

  return (
    <ExpensesContext.Provider
      value={{
        mortgageOrRent,
        foodAndGroceries,
        utilities,
        homeInsurance,
        childcareAndEducation,
        holidays,
        pets,
        gifts,
        setMortgageOrRent,
        setFoodAndGroceries,
        setUtilities,
        setHomeInsurance,
        setChildcareAndEducation,
        setHolidays,
        setPets,
        setGifts,
      }}
    >
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
