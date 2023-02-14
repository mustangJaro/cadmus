import logo from "./logo.svg";
import styles from "./App.module.css";
import ProForma from "./Components/ProForma";

function App() {
  return (
    <div className={styles.container}>
      <div className={styles.app}>
        <ProForma />
      </div>
    </div>
  );
}

export default App;
