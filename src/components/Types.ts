export interface IncomeExpensesStateType {
  Income: {
    salary: number
  }
  HouseholdExpenses: {
    mortgageOrRent: number
    foodAndGroceries: number
    utilities: number
    homeInsurance: number
  }
  FamilyExpenses: {
    childcareAndEducation: number
    holidays: number
    pets: number
    gifts: number
  }
  Finance: {
    creditCardPayment: number
    loanRepayment: number
    carFinancePayment: number
    otherLendingRepayment: number
  }
  HandleFlipPage: {
    flipPage: boolean
  }
}

export type Action =
  | {
      type: 'INCOME'
      value: number
    }
  | {
      type: 'MORTGAGE_OR_RENT'
      value: number
    }
  | {
      type: 'FOOD_GROCERIES'
      value: number
    }
  | {
      type: 'UTILITIES'
      value: number
    }
  | {
      type: 'HOME_INSURANCE'
      value: number
    }
  | {
      type: 'CHILD_CARE_EDUCATION'
      value: number
    }
  | {
      type: 'HOLIDAYS'
      value: number
    }
  | {
      type: 'PETS'
      value: number
    }
  | {
      type: 'GIFTS'
      value: number
    }
  | {
      type: 'CREDITCARD_PAYMENT'
      value: number
    }
  | {
      type: 'LOAN_REPAYMENT'
      value: number
    }
  | {
      type: 'CAR_FINANCE_PAYMENT'
      value: number
    }
  | {
      type: 'OTHER_LENDING_REPAYMENT'
      value: number
    }
  | {
      type: 'FLIP_PAGE'
      value: boolean
    }
