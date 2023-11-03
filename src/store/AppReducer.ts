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
    default:
      throw Error('Unknown action' + action)
  }
}
