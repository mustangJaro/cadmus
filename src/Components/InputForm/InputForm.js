import { useRef } from "react";
import Input from "./Input";
import styles from "./InputForm.module.css";
import Button from "@mui/material/Button";

const InputForm = (props) => {
  const investmentValueRef = useRef();
  const equityValueRef = useRef();
  const rentalIncomeValueRef = useRef();
  const expensesValueRef = useRef();
  const interestRateValueRef = useRef();
  const loanYearsValueRef = useRef();

  const onSubmitHandler = (event) => {
    event.preventDefault();
    props.onSubmit({
      investmentAmount: investmentValueRef.current.value,
      equity: equityValueRef.current.value,
      interestRate: interestRateValueRef.current.value,
      loanYears: loanYearsValueRef.current.value,
      rentalIncome: rentalIncomeValueRef.current.value,
      expenses: expensesValueRef.current.value,
    });
  };

  return (
    <div className={styles.container}>
      <form className={styles["input-form"]}>
        <Input
          valueRef={investmentValueRef}
          label="Investment Amount"
          defaultValue="215000"
        />
        <Input valueRef={equityValueRef} label="Equity" defaultValue="20" />
        <Input
          valueRef={interestRateValueRef}
          label="Interest Rate"
          defaultValue="4.5"
        />
        <Input
          valueRef={loanYearsValueRef}
          label="Loan Duration, in years"
          defaultValue="30"
        />
        <Input
          valueRef={rentalIncomeValueRef}
          label="Rental Income"
          defaultValue="25000"
        />
        <Input
          valueRef={expensesValueRef}
          label="Expenses"
          defaultValue="10500"
        />
        <Button variant="contained" onClick={onSubmitHandler}>
          Calculate
        </Button>
      </form>
    </div>
  );
};
export default InputForm;
