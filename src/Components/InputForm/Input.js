import styles from "./Input.module.css";

import TextField from "@mui/material/TextField";

const Input = (props) => {
  return (
    <div>
      <TextField
        required
        className={styles.label}
        ref={props.valueRef}
        defaultValue={props.defaultValue || ""}
        label={props.label}
      />
    </div>
  );
};
export default Input;
