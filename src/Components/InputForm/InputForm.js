import { useRef, useState } from "react";
import Input from "./Input";
import styles from "./InputForm.module.css";
import Button from "@mui/material/Button";

const InputForm = (props) => {
  const [investAmt, setInvestAmt] = useState(215000);
  const [equity, setEquity] = useState(20);
  const [rentalIncome, setRentalIncome] = useState(25000);
  const [expenses, setExpenses] = useState(10500);
  const [interestRate, setInterestRate] = useState(4.5);
  const [loanYears, setLoanYears] = useState(30);

  const equityChangeHandler = (event) => {
    setEquity(event.target.value);
  };
  const rentalIncomeChangeHandler = (event) => {
    setRentalIncome(event.target.value);
  };
  const expensesChangeHandler = (event) => {
    setExpenses(event.target.value);
  };
  const interestRateChangeHandler = (event) => {
    setInterestRate(event.target.value);
  };
  const loanYearsChangeHandler = (event) => {
    setLoanYears(event.target.value);
  };
  const investAmtChangeHandler = (event) => {
    setInvestAmt(event.target.value);
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    props.onSubmit({
      investmentAmount: investAmt,
      equity: equity,
      interestRate: interestRate,
      loanYears: loanYears,
      rentalIncome: rentalIncome,
      expenses: expenses,
    });
  };

  return (
    <div className={styles.container}>
      <form className={styles["input-form"]}>
        <Input
          value={investAmt}
          onChange={investAmtChangeHandler}
          label="Investment Amount"
          defaultValue="215000"
          type="currency"
        />
        <Input
          value={equity}
          onChange={equityChangeHandler}
          label="Equity"
          defaultValue="20"
          type="percent"
        />
        <Input
          value={interestRate}
          onChange={interestRateChangeHandler}
          label="Interest Rate"
          defaultValue="4.5"
          type="percent"
        />
        <Input
          value={loanYears}
          onChange={loanYearsChangeHandler}
          label="Loan Duration, in years"
          defaultValue="30"
          type="number"
        />
        <Input
          value={rentalIncome}
          onChange={rentalIncomeChangeHandler}
          label="Rental Income"
          defaultValue="25000"
          type="currency"
        />
        <Input
          value={expenses}
          onChange={expensesChangeHandler}
          label="Expenses"
          defaultValue="10500"
          type="currency"
        />
        <Button
          className={styles["calculate-button"]}
          variant="contained"
          onClick={onSubmitHandler}
        >
          Calculate
        </Button>
      </form>
    </div>
  );
};
export default InputForm;
