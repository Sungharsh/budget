import { fireEvent, render, screen } from '@testing-library/react'

import { IncomeExpensesContextProvider } from '../context/IncomeExpensesContext'
import IncomeInput from './IncomeInput'

describe('incomeInput component', () => {
  it('should render the Income component', () => {
    render(
      <IncomeExpensesContextProvider>
        <IncomeInput />
      </IncomeExpensesContextProvider>,
    )
    const yourIncomeText = screen.getByText('Your Income')
    const incomeAmountText = screen.getByText('Please tell your income amount and how often you get it')
    expect(yourIncomeText).toBeInTheDocument()
    expect(incomeAmountText).toBeInTheDocument()
  })

  it('displays alert message', () => {
    render(
      <IncomeExpensesContextProvider>
        <IncomeInput />
      </IncomeExpensesContextProvider>,
    )
    const alertMessage = screen.getByText('Amount will be rounded for you')
    expect(alertMessage).toBeInTheDocument()
  })

  it('should update the income value and enable button', () => {
    render(
      <IncomeExpensesContextProvider>
        <IncomeInput />
      </IncomeExpensesContextProvider>,
    )
    const incomeInput = screen.getByRole('spinbutton', { name: /income/i })
    const addButton = screen.getByText('Add another income')
    const nextButton = screen.getByText('Next')

    expect(incomeInput).toHaveValue(null)
    expect(addButton).toBeDisabled()
    expect(nextButton).toBeDisabled()

    fireEvent.change(incomeInput, { target: { value: '1000' } })
    expect(incomeInput).toHaveValue(1000)
    expect(addButton).toBeEnabled()
    expect(nextButton).toBeEnabled()
  })
})
