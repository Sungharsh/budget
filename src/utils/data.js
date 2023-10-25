//state model
const income = {
  amount: 0,
}

const expenses = {
  householdExpenses: {
    mortgageOrRent: 0,
    foodAndGroceries: 0,
    utilities: 0,
    homeInsurance: 0,
  },
  family: {
    childCareAndEducation: 0,
    holidays: 0,
    pets: 0,
    gifts: 0,
  },
  finance: {
    creditCardPayments: 0,
    loanRepayments: 0,
    carFinancePayments: 0,
    otherLendingRepayments: 0,
  },
  healthAndWellbeing: {
    gym: 0,
    healthInsurance: 0,
    lifeInsurance: 0,
    treatments: 0,
  },
  transport: {
    carInsurance: 0,
    carMaintenance: 0,
    publicTransport: 0,
    parking: 0,
  },
  entertainment: {
    internetTVandMobile: 0,
    subscriptions: 0,
    hobbies: 0,
    outingsGoingOut: 0,
  },
  other: {
    anyOtherExpenses: 0,
  },
}

export { income, expenses }
