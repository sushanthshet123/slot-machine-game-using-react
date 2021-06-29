import React from "react";
import Slot from "./Slot";

const App = () => {
  return (
    <>
      <h1 className="header">
        🎰 welcone to{" "}
        <span className="span"  style={{ fontWeight: "bold" }}>slot machine game </span>🎰
      </h1>
      <div className="display">
      <Slot x="😄" y="😄" z="😄"/>
      <Slot x="😄" y="😄" z="🚌"/>
      <Slot x="🍎" y="🍎" z="🍎"/>
      <Slot x="🎅" y="🥇" z="🚗"/>
      </div>
    </>
  );
};

export default App;
