import { Reducer } from 'react'

import { Action, IncomeExpensesStateType } from '../components/Types'
import { AppState } from './AppState'

export const AppReducer: Reducer<IncomeExpensesStateType, Action> = (state: typeof AppState, action): any => {
  //using useImmerReducer to mutate state
  switch (action.type) {
    case 'INCOME': {
      state.Income.salary = action.value
      break
    }
    case 'MORTGAGE_OR_RENT': {
      state.HouseholdExpenses.mortgageOrRent = action.value
      break
    }
    case 'FOOD_GROCERIES': {
      state.HouseholdExpenses.foodAndGroceries = action.value
      break
    }
    case 'UTILITIES': {
      state.HouseholdExpenses.utilities = action.value
      break
    }
    case 'HOME_INSURANCE': {
      state.HouseholdExpenses.homeInsurance = action.value
      break
    }
    case 'CHILD_CARE_EDUCATION': {
      state.FamilyExpenses.childcareAndEducation = action.value
      break
    }
    case 'HOLIDAYS': {
      state.FamilyExpenses.holidays = action.value
      break
    }
    case 'PETS': {
      state.FamilyExpenses.pets = action.value
      break
    }
    case 'GIFTS': {
      state.FamilyExpenses.gifts = action.value
      break
    }
    case 'CREDITCARD_PAYMENT': {
      state.Finance.creditCardPayment = action.value
      break
    }
    case 'LOAN_REPAYMENT': {
      state.Finance.loanRepayment = action.value
      break
    }
    case 'CAR_FINANCE_PAYMENT': {
      state.Finance.carFinancePayment = action.value
      break
    }
    case 'OTHER_LENDING_REPAYMENT': {
      state.Finance.otherLendingRepayment = action.value
      break
    }
    case 'GYM': {
      state.HealthAndWellbeing.gym = action.value
      break
    }
    case 'HEALTH_INSURANCE': {
      state.HealthAndWellbeing.healthInsurance = action.value
      break
    }
    case 'LIFE_INSURANCE': {
      state.HealthAndWellbeing.lifeInsurance = action.value
      break
    }
    case 'TREATMENTS': {
      state.HealthAndWellbeing.treatments = action.value
      break
    }
    case 'CAR_INSURANCE': {
      state.Transport.carInsurance = action.value
      break
    }
    case 'CAR_MAINTENANCE': {
      state.Transport.carMaintenance = action.value
      break
    }
    case 'PUBLIC_TRANSPORT': {
      state.Transport.publicTransport = action.value
      break
    }
    case 'PARKING': {
      state.Transport.parking = action.value
      break
    }
    case 'INTERNET_TV_MOBILE': {
      state.Entertainment.internetTVandMobile = action.value
      break
    }
    case 'SUBSCRIPTIONS': {
      state.Entertainment.subscriptions = action.value
      break
    }
    case 'HOBBIES': {
      state.Entertainment.hobbies = action.value
      break
    }
    case 'OUTINGS_GOING_OUT': {
      state.Entertainment.outingsGoingOut = action.value
      break
    }
    case 'ANY_OTHER_EXPENSES': {
      state.Other.anyOtherExpenses = action.value
      break
    }
    case 'FLIP_PAGE': {
      state.HandleFlipPage.flipPage = action.value
      break
    }
    default:
      throw Error('Unknown action' + action)
  }
}
