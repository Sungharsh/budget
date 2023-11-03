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
