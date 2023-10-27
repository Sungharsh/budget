import { fireEvent, render, screen } from '@testing-library/react'

import { IncomeProvider } from '../context/IncomeContext'
import IncomeInput from './IncomeInput'

describe('incomeInput component', () => {
  it('should render the Income component', () => {
    render(
      <IncomeProvider>
        <IncomeInput updateFlipPage={() => {}} />
      </IncomeProvider>,
    )
    const yourIncomeText = screen.getByText('Your Income')
    const incomeAmountText = screen.getByText('Please tell your income amount and how often you get it')
    expect(yourIncomeText).toBeInTheDocument()
    expect(incomeAmountText).toBeInTheDocument()
  })

  it('should update the income value and enable button', () => {
    const updateFlipPageMock = jest.fn()
    render(
      <IncomeProvider>
        <IncomeInput updateFlipPage={updateFlipPageMock} />
      </IncomeProvider>,
    )
    const incomeInput = screen.getByRole('spinbutton', { name: /income/i })
    const addButton = screen.getByText('Add another income')
    const nextButton = screen.getByText('Next')

    expect(incomeInput).toHaveValue(null)
    expect(addButton).toBeDisabled()
    expect(nextButton).toBeDisabled()

    // Simulate user input
    fireEvent.change(incomeInput, { target: { value: '1000' } })
    expect(incomeInput).toHaveValue(1000)
    expect(addButton).toBeEnabled()
    expect(nextButton).toBeEnabled()
  })
})
