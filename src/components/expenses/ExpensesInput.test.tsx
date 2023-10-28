import { fireEvent, render, screen } from '@testing-library/react'

import { ExpensesContextProvider } from '../context/ExpensesContext'
import ExpensesInput from './ExpenseInput'

describe('ExpensesInput Component', () => {
  it('Should render exepenses input component with the element with the correct label', () => {
    const label = 'Rent'
    const contextKey = 'MortgageOrRent'
    render(
      <ExpensesContextProvider>
        <ExpensesInput label={label} contextKey={contextKey} />
      </ExpensesContextProvider>,
    )
    const labelRentText = screen.getByLabelText('Rent')
    expect(labelRentText).toBeInTheDocument()
  })
  it('should update the expenses value when input changes', () => {
    const label = 'Rent'
    const contextKey = 'MortgageOrRent'
    const inititExpensesValue = 0
    render(
      <ExpensesContextProvider>
        <ExpensesInput label={label} contextKey={contextKey} />
      </ExpensesContextProvider>,
    )
    const expensesInput = screen.getByRole('spinbutton', { name: /Rent/i })
    expect(expensesInput).toHaveValue(inititExpensesValue)

    fireEvent.change(expensesInput, { target: { value: 2500 } })
    expect(expensesInput).toHaveValue(2500)
  })
})
