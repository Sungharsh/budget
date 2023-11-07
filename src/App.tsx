import Divider from '@mui/material/Divider'
import React from 'react'

import { IncomeExpensesContextProvider } from './components/context/IncomeExpensesContext'
import MenuBar from './components/navbar/AppBar'
import Main from './Main'

const App: React.FC = () => {
  return (
    <>
      <IncomeExpensesContextProvider>
        <MenuBar />
        <Main />
        <Divider sx={{ mt: 6 }} />
      </IncomeExpensesContextProvider>
    </>
  )
}

export default App
