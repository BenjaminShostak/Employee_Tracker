import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavTabs from "./components/NavTabs";



function App() {
    return (
      <Router>
        <div>
          <NavTabs />
          <Route exact path="/" component={Home} />
          <Route exact path="/aboutBenShostak" component={About} />
          <Route exact path="/Mytechblog" component={Blog} />
          <Route path="/contactBen" component={Contact} />
        </div>
      </Router>
    );
  }
  
  export default App;
  