import react, {useState} from 'react';

import styles from "./ProForma.module.css";
import Card from "./UI/Card";
import InputForm from "./InputForm/InputForm";
import CalculatedOutput from "./CalculatedOutput/CalculatedOutput";
import MonthlyPayment from '../Helpers/Math';

const ProForma = (props) => {
  const [noi, setNOI] = useState(0);
  const [capRate, setCapRate] = useState(0);
  const [investmentAmount, setInvestmentAmount] = useState(0);
  const [equity, setEquity] = useState(0);
  const [debtAmount, setDebtAmount] = useState(0);
  const [monthlyPayment, setMonthlyPayment] = useState(0);

  const onSubmitHandler = (data) => {
    setDebtAmount(data.investmentAmount * (100 - data.equity) / 100);
    setInvestmentAmount(data.investmentAmount);
    setNOI(data.rentalIncome - data.expenses)
    setCapRate(noi / data.investmentAmount * 100);
    setEquity(data.investmentAmount * data.equity / 100);
    setMonthlyPayment(MonthlyPayment(debtAmount, 4.5, 30))
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
        />
      </Card>
    </>
  );
};
export default ProForma;
