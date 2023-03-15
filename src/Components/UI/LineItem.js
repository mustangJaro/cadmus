import styles from "./LineItem.module.css";
import Text from "./Text";

const LineItem = (props) => {
  let cssType = "detail";
  switch (props.type) {
    case "summary":
      cssType = "summary";
      break;
    case "calculated":
      cssType = "calculated";
      break;
  }

  return (
    <div className={`${styles["line-item"]} ${styles[cssType]}`}>
      <Text value={props.label} />
      <Text value={props.value} className={`${styles["value"]}`}/>
    </div>
  );
};
export default LineItem;
