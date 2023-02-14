import styles from "./CalculatedOutput.module.css";
import LineItem from "../UI/LineItem";

const CalculatedOutput = (props) => {
  console.log("calc output: " + props.capitalizationRate);
  return (
    <div className={styles["container"]}>
      <div className={styles["calculated-output"]}>
        <LineItem
          label="Capitalization Rate"
          value={props.capitalizationRate}
        />
        <LineItem label="Investment Amount" value={props.investmentAmount} />
        <LineItem label="Debt Amount" value={props.debtAmount} />
        <LineItem label="Equity" value={props.equity} />
      </div>
    </div>
  );
};
export default CalculatedOutput;
