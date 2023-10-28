import React, { createContext, useContext, useState } from 'react'

interface Income {
  amount: number
}

interface IncomeContextType {
  income: Income
  updateIncome: (newAmount: number) => void
}

interface Props {
  children: React.ReactNode
}

const IncomeContext = createContext<IncomeContextType | undefined>(undefined)

export const IncomeProvider: React.FC<Props> = ({ children }) => {
  const [income, setIncome] = useState<Income>({ amount: 0 })

  const updateIncome = (newAmount: number) => {
    setIncome({ amount: newAmount })
  }

  return <IncomeContext.Provider value={{ income, updateIncome }}>{children}</IncomeContext.Provider>
}

export const useIncome = () => {
  const context = useContext(IncomeContext)
  if (!context) {
    throw new Error('useIncome must be used within an IncomeProvider')
  }
  return context
}
