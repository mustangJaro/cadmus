import styles from "./CalculatedOutput.module.css";
import LineItem from "../UI/LineItem";
import { Percent, Dollars } from "../../Helpers/Format";

const CalculatedOutput = (props) => {
  const debtService = props.monthlyPayment * 12 * -1;
  const netCashFlow = props.netOperatingIncome + debtService;
  const leveragedROI = (netCashFlow / props.equity) * 100;
  const rOIAfterPrincipal =
    ((netCashFlow + props.firstYearPrincipal) / props.equity) * 100;
  return (
    <div className={styles["container"]}>
      <div className={styles["calculated-output"]}>
        <LineItem
          label="Capitalization Rate"
          value={Percent(props.capitalizationRate)}
          type="calculated"
        />
        <LineItem
          label="Investment Amount"
          value={Dollars(props.investmentAmount)}
        />
        <LineItem label="Debt Amount" value={Dollars(props.debtAmount)} />
        <LineItem label="Equity"
          value={Dollars(props.equity)}
          type="summary" />
        <LineItem
          label="Net Operating Income"
          value={Dollars(props.netOperatingIncome)}
        />
        <LineItem label="Debt Service" value={Dollars(debtService)} />
        <LineItem
          label="Net Cash Flow"
          value={Dollars(netCashFlow)}
          type="summary"
        />
        <LineItem
          label="Leveraged ROI"
          value={Percent(leveragedROI)}
          type="calculated"
        />
        <LineItem
          label="Principal Payment Year 1"
          value={Dollars(props.firstYearPrincipal)}
        />
        <LineItem
          label="ROI After Principal Payment"
          value={Percent(rOIAfterPrincipal)}
          type="calculated"
        />
        <LineItem
          label="Interest Year 1"
          value={Dollars(props.firstYearInterest)}
        />
        <LineItem label="Tax Refund on Interest" value="calc" />
        <LineItem label="Tax Refund on Expenses" value="calc" />
      </div>
    </div>
  );
};
export default CalculatedOutput;
