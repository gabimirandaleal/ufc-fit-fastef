import React from 'react';
import {Routes} from './Routes';
import { useStyles } from "./AppStyle";

function App() {
  const styles = useStyles();

  return (
    <div className={styles.container}>
      <Routes></Routes>
    </div>
  );
}

export default App;
