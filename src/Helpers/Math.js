export function Round(x) {
  return Math.round(x * 100) / 100;
}

const MonthlyPayment = (amount, interest, years) => {
  var interest = interest / 100 / 12;
  var payments = years * 12;

  // Now compute the monthly payment figure, using esoteric math.
  var x = Math.pow(1 + interest, payments);
  var monthly = (amount * x * interest) / (x - 1);
  return Round(monthly);
}

export function FirstYearLoanCalc (amount, interest, totalYears) {
  var monthlyPayment = MonthlyPayment(amount, interest, totalYears);
  var monthlyInterestRate = interest / 100 / 12;
  // do this 12 times to get the first year
  var totalInterestPayment = 0;
  var totalPrincipalPayment = 0;
  var m;
  for (m = 1; m <= 12; m++){
    var interestPayment = amount * monthlyInterestRate;
    totalInterestPayment += interestPayment;

    var principalPayment = monthlyPayment - interestPayment;
    totalPrincipalPayment += principalPayment;

    amount -= principalPayment;
  }
  return {
    "interestPayment": totalInterestPayment,
    "principalPayment": totalPrincipalPayment
  }
}

export default MonthlyPayment;