import ExpensesInput from './ExpensesInput'
import { CategoryType } from './ExpensesTypes'

export const RenderExpensesInputs = (expensesCategory: CategoryType) => {
  if (expensesCategory === 'HOUSEHOLD') {
    return (
      <>
        <ExpensesInput label="Mortgage or Rent" contextKey="MORTGAGE_OR_RENT" />
        <ExpensesInput label="Food and Groceries" contextKey="FOOD_GROCERIES" />
        <ExpensesInput label="Utilities" contextKey="UTILITIES" />
        <ExpensesInput label="Home Insurance" contextKey="HOME_INSURANCE" />
      </>
    )
  } else if (expensesCategory === 'FAMILY') {
    return (
      <>
        <ExpensesInput label="Childcare" contextKey="CHILD_CARE_EDUCATION" />
        <ExpensesInput label="Holidays" contextKey="HOLIDAYS" />
        <ExpensesInput label="Pets" contextKey="PETS" />
        <ExpensesInput label="Gifts" contextKey="GIFTS" />
      </>
    )
  } else if (expensesCategory === 'FINANCE') {
    return (
      <>
        <ExpensesInput label="Credit Card" contextKey="CREDITCARD_PAYMENT" />
        <ExpensesInput label="Loan" contextKey="LOAN_REPAYMENT" />
        <ExpensesInput label="Car Finance" contextKey="CAR_FINANCE_PAYMENT" />
        <ExpensesInput label="Other Lending" contextKey="OTHER_LENDING_REPAYMENT" />
      </>
    )
  } else if (expensesCategory === 'HEALTH') {
    return (
      <>
        <ExpensesInput label="Gym" contextKey="GYM" />
        <ExpensesInput label="Health insurance" contextKey="HEALTH_INSURANCE" />
        <ExpensesInput label="Life insurance" contextKey="LIFE_INSURANCE" />
        <ExpensesInput label="Treatment" contextKey="TREATMENTS" />
      </>
    )
  } else if (expensesCategory === 'TRANSPORT') {
    return (
      <>
        <ExpensesInput label="Car insurance" contextKey="CAR_INSURANCE" />
        <ExpensesInput label="Car maintenance" contextKey="CAR_MAINTENANCE" />
        <ExpensesInput label="Life insurance" contextKey="LIFE_INSURANCE" />

        <ExpensesInput label="Treatment" contextKey="TREATMENTS" />
      </>
    )
  } else if (expensesCategory === 'ENTERTAINMENT') {
    return (
      <>
        <ExpensesInput label="Internet, TV, Mobile" contextKey="INTERNET_TV_MOBILE" />
        <ExpensesInput label="Subscriptions" contextKey="SUBSCRIPTIONS" />
        <ExpensesInput label="Hobbies" contextKey="HOBBIES" />
        <ExpensesInput label="Outings-Going-Out" contextKey="OUTINGS_GOING_OUT" />
      </>
    )
  } else {
    return (
      <>
        <ExpensesInput label="Other" contextKey="ANY_OTHER_EXPENSES" />
      </>
    )
  }
}
