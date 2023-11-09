import { fireEvent, render, screen } from '@testing-library/react'

import { IncomeExpensesContextProvider } from '../context/IncomeExpensesContext'
import ExpensesInput from './ExpensesInput'

describe('ExpensesInput Component', () => {
  it('Should render exepenses input component with the element with the correct label', () => {
    const label = 'Rent'
    const contextKey = 'MORTGAGE_OR_RENT'
    render(
      <IncomeExpensesContextProvider>
        <ExpensesInput label={label} contextKey={contextKey} />
      </IncomeExpensesContextProvider>,
    )
    const labelRentText = screen.getByLabelText('Rent')
    expect(labelRentText).toBeInTheDocument()
  })
  it('should update the expenses value when input changes', () => {
    const label = 'Rent'
    const contextKey = 'MORTGAGE_OR_RENT'
    const inititExpensesValue = null
    render(
      <IncomeExpensesContextProvider>
        <ExpensesInput label={label} contextKey={contextKey} />
      </IncomeExpensesContextProvider>,
    )
    const expensesInput = screen.getByRole('spinbutton', { name: /Rent/i })
    expect(expensesInput).toHaveValue(inititExpensesValue)

    fireEvent.change(expensesInput, { target: { value: 2500 } })
    expect(expensesInput).toHaveValue(2500)
  })
})
