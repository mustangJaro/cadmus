import styles from "./CalculatedOutput.module.css";
import LineItem from "../UI/LineItem";
import {Percent, Dollars} from '../../Helpers/Format';

const CalculatedOutput = (props) => {
  const debtService = props.monthlyPayment * 12 * -1;
  const netCashFlow = props.netOperatingIncome + debtService;
  const leveragedROI = netCashFlow / props.equity * 100;
  return (
    <div className={styles["container"]}>
      <div className={styles["calculated-output"]}>
        <LineItem
          label="Capitalization Rate"
          value={Percent(props.capitalizationRate)}
        />
        <LineItem label="Investment Amount" value={Dollars(props.investmentAmount)} />
        <LineItem label="Debt Amount" value={Dollars(props.debtAmount)} />
        <LineItem label="Equity" value={Dollars(props.equity)} />
        <LineItem label="Net Operating Income" value={Dollars(props.netOperatingIncome)} />
        <LineItem label="Debt Service" value={Dollars(debtService)} />
        <LineItem label="Net Cash Flow" value={Dollars(netCashFlow)} />
        <LineItem label="Leveraged ROI" value={Percent(leveragedROI)} />
        <LineItem label="Principal Payment Year 1" value={Dollars(props.monthlyPayment)} />
        <LineItem label="ROI After Principal Payment" value='calc' />
        <LineItem label="Interest Year 1" value='calc' />
        <LineItem label="Tax Refund on Interest" value='calc' />
        <LineItem label="Tax Refund on Expenses" value='calc' />
      </div>
    </div>
  );
};
export default CalculatedOutput;
