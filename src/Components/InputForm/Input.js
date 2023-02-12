import styles from './Input.module.css';

const Input = (props) => {
  return (
    <div>
      <label className={styles.label}>{props.label}</label>
      <input className={styles.input} ref={props.valueRef} defaultValue={props.defaultValue || ''}/>
    </div>
  )
}
export default Input;