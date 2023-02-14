import react, {useState} from 'react';

import styles from "./ProForma.module.css";
import Card from "./UI/Card";
import InputForm from "./InputForm/InputForm";
import CalculatedOutput from "./CalculatedOutput/CalculatedOutput";
import MonthlyPayment, { FirstYearLoanCalc } from '../Helpers/Math';

const ProForma = (props) => {
  const [noi, setNOI] = useState(0);
  const [capRate, setCapRate] = useState(0);
  const [investmentAmount, setInvestmentAmount] = useState(0);
  const [equity, setEquity] = useState(0);
  const [debtAmount, setDebtAmount] = useState(0);
  const [monthlyPayment, setMonthlyPayment] = useState(0);
  const [firstYearInterest, setFirstYearInterest] = useState(0);
  const [firstYearPrincipal, setFirstYearPrincipal] = useState(0);

  const onSubmitHandler = (data) => {
    let interestRate = data.interestRate;
    let loanYears = data.loanYears;
    let debtAmount = data.investmentAmount * (100 - data.equity) / 100;
    let firstYearLoanValues = FirstYearLoanCalc(debtAmount, interestRate, loanYears);
    let noi = data.rentalIncome - data.expenses;
    setDebtAmount(debtAmount);
    setInvestmentAmount(data.investmentAmount);
    setNOI(noi)
    setCapRate(noi / data.investmentAmount * 100);
    setEquity(data.investmentAmount * data.equity / 100);
    setMonthlyPayment(MonthlyPayment(debtAmount, interestRate, loanYears))
    setFirstYearInterest(firstYearLoanValues.interestPayment);
    setFirstYearPrincipal(firstYearLoanValues.principalPayment);
  };

  return (
    <>
      <Card>
        <InputForm onSubmit={onSubmitHandler} />
      </Card>
      <Card>
        <CalculatedOutput
          netOperatingIncome={noi}
          capitalizationRate={capRate}
          investmentAmount={investmentAmount}
          equity={equity}
          debtAmount={debtAmount}
          monthlyPayment={monthlyPayment}
          firstYearInterest={firstYearInterest}
          firstYearPrincipal={firstYearPrincipal}
        />
      </Card>
    </>
  );
};
export default ProForma;
