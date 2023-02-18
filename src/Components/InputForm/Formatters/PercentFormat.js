import React from "react";
import { NumericFormat } from "react-number-format";

const PercentFormat = React.forwardRef(function NumberFormatCustom(
  props,
  ref
) {
  const { onChange, ...other } = props;

  return (
    <NumericFormat
      {...other}
      getInputRef={ref}
      onValueChange={(values) => {
        onChange({
          target: {
            name: props.name,
            value: values.value,
          },
        });
      }}
      valueIsNumericString={true}
      suffix="%"
    />
  );
});

export default PercentFormat;
