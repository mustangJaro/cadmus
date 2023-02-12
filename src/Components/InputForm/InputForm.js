import { useRef } from 'react';
import Input from './Input';
import styles from './InputForm.module.css';

const InputForm = (props) => {
  const investmentValueRef = useRef();
  const equityValueRef = useRef();
  const rentalIncomeValueRef = useRef();

  const onSubmitHandler = (event) => {
    event.preventDefault();
    props.onSubmit({
      "investmentAmount": investmentValueRef.current.value,
      "equity": equityValueRef.current.value,
      "rentalIncome": rentalIncomeValueRef.current.value
    });
  }

  return (
    <form className={styles['input-form']}>
      <Input valueRef={investmentValueRef} label="Investment Amount" defaultValue='200000'/>
      <Input valueRef={equityValueRef} label="Equity" defaultValue='20'/>
      <Input valueRef={rentalIncomeValueRef} label="Rental Income" defaultValue='1500'/>
      <button onClick={onSubmitHandler}>Calculate</button>
    </form>
  )
}
export default InputForm;