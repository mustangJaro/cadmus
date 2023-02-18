import React from "react";
import { NumericFormat } from "react-number-format";

const CurrencyFormat = React.forwardRef(function NumberFormatCustom(
  props,
  ref
) {
  const { onChange, ...other } = props;

  return (
    <NumericFormat
      {...other}
      getInputRef={ref}
      thousandSeparator=","
      onValueChange={(values) => {
        onChange({
          target: {
            name: props.name,
            value: values.value,
          },
        });
      }}
      valueIsNumericString={true}
      prefix="$"
    />
  );
});

export default CurrencyFormat;
