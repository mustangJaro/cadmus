import styles from "./LineItem.module.css";
import Text from './Text';

const LineItem = (props) => {
  return (
    <div className={styles['line-item']}>
      <Text value={props.label} />
      <Text value={props.value} />
    </div>
  );
};
export default LineItem;
