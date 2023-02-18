import React from "react";
import styles from "./Input.module.css";

import TextField from "@mui/material/TextField";
import CurrencyFormat from "./Formatters/CurrencyFormat";
import PercentFormat from "./Formatters/PercentFormat";
import NumberFormat from "./Formatters/NumberFormat";

const Input = (props) => {
  var comp = CurrencyFormat;
  switch (props.type) {
    case "currency":
      comp = CurrencyFormat;
      break;
    case "percent":
      comp = PercentFormat;
      break;
    case "number":
      comp = NumberFormat;
      break;
  }

  return (
    <div>
      <TextField
        required
        className={styles.label}
        defaultValue={props.defaultValue || ""}
        label={props.label}
        InputProps={{
          inputComponent: comp,
        }}
        value={props.value}
        onChange={props.onChange}
      />
    </div>
  );
};
export default Input;
