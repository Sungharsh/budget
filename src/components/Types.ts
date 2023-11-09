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
  HealthAndWellbeing: {
    gym: number
    healthInsurance: number
    lifeInsurance: number
    treatments: number
  }
  Transport: {
    carInsurance: number
    carMaintenance: number
    publicTransport: number
    parking: number
  }
  Entertainment: {
    internetTVandMobile: number
    subscriptions: number
    hobbies: number
    outingsGoingOut: number
  }
  Other: {
    anyOtherExpenses: number
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
      type: 'GYM'
      value: number
    }
  | {
      type: 'HEALTH_INSURANCE'
      value: number
    }
  | {
      type: 'LIFE_INSURANCE'
      value: number
    }
  | {
      type: 'TREATMENTS'
      value: number
    }
  | {
      type: 'CAR_INSURANCE'
      value: number
    }
  | {
      type: 'CAR_MAINTENANCE'
      value: number
    }
  | {
      type: 'PUBLIC_TRANSPORT'
      value: number
    }
  | {
      type: 'PARKING'
      value: number
    }
  | {
      type: 'INTERNET_TV_MOBILE'
      value: number
    }
  | {
      type: 'SUBSCRIPTIONS'
      value: number
    }
  | {
      type: 'HOBBIES'
      value: number
    }
  | {
      type: 'OUTINGS_GOING_OUT'
      value: number
    }
  | {
      type: 'ANY_OTHER_EXPENSES'
      value: number
    }
  | {
      type: 'FLIP_PAGE'
      value: boolean
    }
