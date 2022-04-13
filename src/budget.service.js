let DailyExpenses = [];

let gas = 55.00;
let rent = 555.00;
let prime = 13.87;
let coinbase = 46.00
let stash = 120.00;
let phone = 86.00 + 142.50;
let CC = 125.00;
let Diapers = 110.00;
let DiningOut = 0.00;
let QuickBooks = 16;
let cars = 501.56;
let insurance = 113.05;
let fuel = 100.00;
let groceries = 665;
let lifeInsurance = 70;
let electric = 120.00;

// TODO: Make bills be the json object that is being sent from the frontend
let bills = {
    "electric": electric,
    "gas": gas,
    "rent": rent,
    "prime": prime,
    "coinbase": coinbase,
    "stash": stash,
    "phone": phone,
    "CC": CC,
    "Diapers": Diapers,
    "DiningOut": DiningOut,
    "QuickBooks": QuickBooks,
    "cars": cars,
    "insurance": insurance,
    "fuel": fuel,
    "groceries": groceries,
    "lifeInsurance": lifeInsurance
}

var allBills = 0;

export function calculateMonthlyBills(bills) {
    for (const [_, value] of Object.entries(bills)) {
        allBills = value;
    }
}

export function calculateWeeklyBudget(gross, net, bills, dailyExpenses) {
    let NETIncome = net;
    let GrossIncome = gross;
    let Leif = GrossIncome * .17;
    let Tithe = NETIncome * .10;
    let weeklyBills = bills / 4;

    return NETIncome - Leif - Tithe - weeklyBills;
}

export function setActualMoney(){
  return allBills - subtractDailyExpensesFromBudget();
}

export function subtractDailyExpensesFromBudget(){
  let total = 0;
  DailyExpenses.forEach(el => total += el.amount);
  return total;
}

export function setDailyExpenses(expense){
    return DailyExpenses.push(expense);
}
