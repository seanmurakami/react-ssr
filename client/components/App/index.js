import React from "react";
import style from "./style";

const App = () => {
  return (
    <>
      <div className={style.app}>Hello there</div>
      <button onClick={e => console.log(e)}>CONSOLE LOG</button>
    </>
  );
};

export default App;
