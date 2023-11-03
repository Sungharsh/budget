import { fireEvent, render, screen } from '@testing-library/react'

import { IncomeExpensesContextProvider } from '../context/IncomeExpensesContext'
import IncomeInput from './IncomeInput'

describe('incomeInput component', () => {
  it('should render the Income component', () => {
    render(
      <IncomeExpensesContextProvider>
        <IncomeInput updateFlipPage={() => {}} />
      </IncomeExpensesContextProvider>,
    )
    const yourIncomeText = screen.getByText('Your Income')
    const incomeAmountText = screen.getByText('Please tell your income amount and how often you get it')
    expect(yourIncomeText).toBeInTheDocument()
    expect(incomeAmountText).toBeInTheDocument()
  })

  it('should update the income value and enable button', () => {
    const updateFlipPageMock = jest.fn()
    render(
      <IncomeExpensesContextProvider>
        <IncomeInput updateFlipPage={updateFlipPageMock} />
      </IncomeExpensesContextProvider>,
    )
    const incomeInput = screen.getByRole('spinbutton', { name: /income/i })
    const addButton = screen.getByText('Add another income')
    const nextButton = screen.getByText('Next')

    expect(incomeInput).toHaveValue(null)
    expect(addButton).toBeDisabled()
    expect(nextButton).toBeEnabled()

    fireEvent.change(incomeInput, { target: { value: '1000' } })
    expect(incomeInput).toHaveValue(1000)
    expect(addButton).toBeEnabled()
    expect(nextButton).toBeEnabled()

    fireEvent.click(nextButton)
    expect(updateFlipPageMock).toHaveBeenCalled()
  })
})
