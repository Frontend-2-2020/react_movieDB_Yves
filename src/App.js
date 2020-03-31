import React, { Component } from "react";
import Navbar from "./components/navbar/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import Detail from "./containers/detail/Detail";
import Overview from "./containers/overview/Overview";
import Fail from "./components/error/Fail";
import SearchList from "./containers/search/SearchList";

import { Route, Switch } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Switch>
          <Route path="/detail/:id" component={Detail} />
          <Route path="/" exact component={Overview} />
          <Route path="/list" component={SearchList} />
          <Route component={Fail} />
        </Switch>
      </div>
    );
  }
}

export default App;
