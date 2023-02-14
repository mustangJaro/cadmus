export function Round(x) {
  return Math.round(x * 100) / 100;
}

const MonthlyPayment = (amount, interest, years) => {
  console.log('Started calc for monthly payment');
  var interest = interest / 100 / 12;
  var payments = years * 12;

  // Now compute the monthly payment figure, using esoteric math.
  var x = Math.pow(1 + interest, payments);
  console.log('Monthly Payment x: ' + x);
  var monthly = (amount * x * interest) / (x - 1);
  return Round(monthly);
}

export function FirstYearLoanCalc (amount, interest, totalYears) {
  var monthlyPayment = MonthlyPayment(amount, interest, totalYears);
}

export default MonthlyPayment;