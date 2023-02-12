import styles from "./ProForma.module.css";
import Card from "./UI/Card";
import InputForm from "./InputForm/InputForm";
import CalculatedOutput from './CalculatedOutput/CalculatedOutput';

const ProForma = (props) => {

  const onSubmitHandler = (data) => {
    console.log('pro forma data' + data.investmentAmount + ', ' + data.equity);
  }

  return (
    <>
      <Card>
        <InputForm onSubmit={onSubmitHandler}/>
      </Card>
      <Card>
        <CalculatedOutput />
      </Card>
    </>
  );
};
export default ProForma;
