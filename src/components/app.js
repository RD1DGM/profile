import React from "react";
import "../scss/components/app.scss";
import Introduction from "./introduction";
import Frame from "./frame";

function App() {
  return (
    <div className="app_body">
      <Frame />
      <Introduction />
    </div>
  );
}

export default App;
