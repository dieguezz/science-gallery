import React from "react";
import "./reset.css";
import "./App.css";
import "./Core/styles/index.scss";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Home } from "./Home";
import { ItemPage } from "./ItemPage/ItemPage";

function App() {
  return (
    <Router>
      <div>
        <Route exact path="/" component={Home} />
        <Route path="/item/:id" component={ItemPage} />
      </div>
    </Router>
  );
}

export default App;
