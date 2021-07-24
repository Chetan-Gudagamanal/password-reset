
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import LoginPage from './components/LoginPage';
import Register from './components/Register';
import ForgotPasswordPage from "./components/ForgotPasswordPage"
import ChangePasswordPage from "./components/ChangePasswordPage"
import ResetPasswordPage from "./components/ResetPasswordPage"
import {Switch, Route, useParams} from "react-router-dom"
import { useState } from 'react';
import StatusDisplay from "./components/StatusDisplay"


function App() {
  const [status,setStatus]=useState("")
  return (
    <div className="App">
      <header className="header-class">
        <div className="page-title">Application to allow reset Password</div>
      </header>
      <section className="section-class">
        <Switch>
          <Route path="/register">
            <Register setStatus={setStatus}/>        
          </Route>
          <Route path="/forgotPassword">
            <ForgotPasswordPage setStatus={setStatus}/>        
          </Route>
          <Route path="/reset_password/:id/:token">
            <ResetPasswordPage useParams={useParams} setStatus={setStatus}/>       
          </Route>
          <Route path="/change_password/:id/:token">
            <ChangePasswordPage setStatus={setStatus}/>        
          </Route>
          <Route path="/status">
            <StatusDisplay status={status}/>        
          </Route>
          <Route path="/">
            <LoginPage setStatus={setStatus}/>        
          </Route>
        </Switch>
        
      </section>
    </div>
  );
}

export default App;
