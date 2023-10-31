//App state model
const income = {
  amount: 0,
}

const expenses = {
  Household: {
    mortgageOrRent: 0,
    foodAndGroceries: 0,
    utilities: 0,
    homeInsurance: 0,
  },
  Family: {
    childCareAndEducation: 0,
    holidays: 0,
    pets: 0,
    gifts: 0,
  },
  Finance: {
    creditCardPayments: 0,
    loanRepayments: 0,
    carFinancePayments: 0,
    otherLendingRepayments: 0,
  },
  HealthAndWellbeing: {
    gym: 0,
    healthInsurance: 0,
    lifeInsurance: 0,
    treatments: 0,
  },
  Transport: {
    carInsurance: 0,
    carMaintenance: 0,
    publicTransport: 0,
    parking: 0,
  },
  Entertainment: {
    internetTVandMobile: 0,
    subscriptions: 0,
    hobbies: 0,
    outingsGoingOut: 0,
  },
  Other: {
    anyOtherExpenses: 0,
  },
}

export { income, expenses }
