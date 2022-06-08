import Budget from "./Budget"
import Authentication from "./Authentication";
import "./App.css"
import {BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
 
  return (
    <Provider store={store}>
      <div className="app-container">
        <Router>
          <Switch>
            <Route exact path= "/">
              <Authentication/>
            </Route>
            <Route path= "/dashboard//:identity">
            <Budget/>
            </Route>
          </Switch>
        </Router>

      </div>

    </Provider>
  )
      
}

export default App;
