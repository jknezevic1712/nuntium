import React from "react";
import "./App.scss";

import Header from "./components/header/header.component";
import Homepage from "./pages/homepage.component";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="App-container">
        <Homepage />
      </div>
    </div>
  );
}

export default App;
