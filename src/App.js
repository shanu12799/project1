import './App.css';
import Dashboard from './Component/DashBoard/Dashboard'
import Signin from './Component/Singin'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
       <Router>
         <Switch>
          <Route exact path="/">
          <Signin/>
          </Route>
          <Route path="/Dashboard">
            <Dashboard />
          </Route>
        </Switch>
    </Router>
      {/* <Login/> */}
      {/* <Dashboard/> */}
      
    </div>
  );
}

export default App;
