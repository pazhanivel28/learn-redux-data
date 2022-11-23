import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";

import "./App.css";
import DataForm from "./container/DataForm";
import DataView from "./container/DataView";

function App() {
  return (
    <Router>
      <div className="App">
        <h1>Data Detail</h1>
      </div>
      <ul>
        <li>
          <NavLink to="/">Data Form</NavLink>
        </li>
        <li>
          <NavLink to="/dataView">Data View</NavLink>
        </li>
      </ul>
      <Switch>
        <Route exact path="/" component={DataForm} />
        <Route path="/dataView" component={DataView} />
      </Switch>
    </Router>
  );
}

export default App;
