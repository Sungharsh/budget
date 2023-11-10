import ExpensesInput from './ExpensesInput'
import { CategoryType } from './ExpensesTypes'
import { ContextKeyType } from './ExpensesTypes'

interface ExpenseItem {
  label: string
  contextKey: ContextKeyType
}

export const RenderExpensesInputs = (expensesCategory: CategoryType) => {
  const categoryMapping: Record<CategoryType, ExpenseItem[]> = {
    HOUSEHOLD: [
      { label: 'Mortgage or Rent', contextKey: 'MORTGAGE_OR_RENT' },
      { label: 'Food and Groceries', contextKey: 'FOOD_GROCERIES' },
      { label: 'Utilities', contextKey: 'UTILITIES' },
      { label: 'Home Insurance', contextKey: 'HOME_INSURANCE' },
    ],
    FAMILY: [
      { label: 'Childcare', contextKey: 'CHILD_CARE_EDUCATION' },
      { label: 'Holidays', contextKey: 'HOLIDAYS' },
      { label: 'Pets', contextKey: 'PETS' },
      { label: 'Gifts', contextKey: 'GIFTS' },
    ],
    FINANCE: [
      { label: 'Credit Card', contextKey: 'CREDITCARD_PAYMENT' },
      { label: 'Loan', contextKey: 'LOAN_REPAYMENT' },
      { label: 'Car Finance', contextKey: 'CAR_FINANCE_PAYMENT' },
      { label: 'Other Lending', contextKey: 'OTHER_LENDING_REPAYMENT' },
    ],
    HEALTH: [
      { label: 'Gym', contextKey: 'GYM' },
      { label: 'Health insurance', contextKey: 'HEALTH_INSURANCE' },
      { label: 'Life insurance', contextKey: 'LIFE_INSURANCE' },
      { label: 'Treatment', contextKey: 'TREATMENTS' },
    ],
    TRANSPORT: [
      { label: 'Car insurance', contextKey: 'CAR_INSURANCE' },
      { label: 'Car maintenance', contextKey: 'CAR_MAINTENANCE' },
      { label: 'Public transport', contextKey: 'PUBLIC_TRANSPORT' },
      { label: 'Parking', contextKey: 'PARKING' },
    ],
    ENTERTAINMENT: [
      { label: 'Internet, TV, Mobile', contextKey: 'INTERNET_TV_MOBILE' },
      { label: 'Subscriptions', contextKey: 'SUBSCRIPTIONS' },
      { label: 'Hobbies', contextKey: 'HOBBIES' },
      { label: 'Outings-Going-Out', contextKey: 'OUTINGS_GOING_OUT' },
    ],
    OTHER: [{ label: 'Other', contextKey: 'ANY_OTHER_EXPENSES' }],
  }

  const generateExpensesInputs = (items: ExpenseItem[]) => {
    return items.map(item => <ExpensesInput key={item.contextKey} label={item.label} contextKey={item.contextKey} />)
  }

  return generateExpensesInputs(categoryMapping[expensesCategory]) || null
}
