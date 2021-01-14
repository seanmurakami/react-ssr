import React from "react";
import style from "./style";

export const App = () => {
  return (
    <>
      <div className={style.app}>Hello there</div>
      <button onClick={e => console.log(e)}>CONSOLE LOG</button>
    </>
  );
};
