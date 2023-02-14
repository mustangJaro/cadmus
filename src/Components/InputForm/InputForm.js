import { useRef } from 'react';
import Input from './Input';
import styles from './InputForm.module.css';

const InputForm = (props) => {
  const investmentValueRef = useRef();
  const equityValueRef = useRef();
  const rentalIncomeValueRef = useRef();
  const expensesValueRef = useRef();

  const onSubmitHandler = (event) => {
    event.preventDefault();
    props.onSubmit({
      "investmentAmount": investmentValueRef.current.value,
      "equity": equityValueRef.current.value,
      "rentalIncome": rentalIncomeValueRef.current.value,
      "expenses": expensesValueRef.current.value
    });
  }

  return (
    <form className={styles['input-form']}>
      <Input valueRef={investmentValueRef} label="Investment Amount" defaultValue='215000'/>
      <Input valueRef={equityValueRef} label="Equity" defaultValue='20'/>
      <Input valueRef={rentalIncomeValueRef} label="Rental Income" defaultValue='25000'/>
      <Input valueRef={expensesValueRef} label="Expenses" defaultValue='10500'/>
      <button onClick={onSubmitHandler}>Calculate</button>
    </form>
  )
}
export default InputForm;