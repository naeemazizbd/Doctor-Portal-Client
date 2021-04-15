import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Homes/Home/Home';
import Appointment from './components/Appointment/Appointment/Appointment';
import Dashboard from './components/Dashboard/Dashboard/Dashboard';
import AddDoctor from './components/AddDoctor/AddDoctor';
import AllPatients from './components/AllPatients/AllPatients/AllPatients';
import Login from './components/Login/Login/Login';
import { createContext, useState } from 'react';
import PrivateRoute from './components/Login/PrivateRoute/PrivateRoute';
import NotMatch from './components/NotMatch/NotMatch';
export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route path="/appointment">
            <Appointment></Appointment>
          </Route>
          
          
          <PrivateRoute path="/dashboard">
            <Dashboard></Dashboard>
          </PrivateRoute>
          <PrivateRoute path="/allPatients">
            <AllPatients></AllPatients>
          </PrivateRoute>
          <Route path="/addDoctor">
            <AddDoctor></AddDoctor>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path ="/home">
          <Home/>
          </Route>
          <Route path="*">
            <NotMatch/>
          </Route>
    
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;