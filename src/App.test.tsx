import { render, screen } from '@testing-library/react'

import App from './App'
import { IncomeExpensesContextProvider } from './components/context/IncomeExpensesContext'

describe('App component', () => {
  it('should render the app correctly', () => {
    render(
      <IncomeExpensesContextProvider>
        <App />
      </IncomeExpensesContextProvider>,
    )
    expect(screen.getByTestId('menu-bar')).toBeInTheDocument()
    expect(screen.getByTestId('main')).toBeInTheDocument()
    expect(screen.getByTestId('divider')).toBeInTheDocument()
  })
})
