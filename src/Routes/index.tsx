import { Switch } from "react-router-dom";
import Dashboard from "../Pages/Dashboard";
import Login from "../Pages/Login";
import Signup from "../Pages/Signup";
import { Route } from "./Route";


export const Routes = () => {

  return (
    <Switch>
      <Route exact path="/" component={Login} />
      <Route exact path="/signup" component={Signup} />
      <Route exact path="/dashboard" component={Dashboard} isPrivate/>
    </Switch>
  );
};

