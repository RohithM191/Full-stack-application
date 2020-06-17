import React from "react";
import { BrowserRouter, Route, Link, NavLink } from "react-router-dom";
import "./Styles.css";

import Alerting from './components/Alerting';
import Radio_communication_failure from './components/Radio_communication_failure';

import Filed_flight_plan from './components/Filed_flight_plan';
import Modification from './components/Modification';
import Cancellation from './components/Cancellation'
import Delay from './components/Delay';
import Departure from'./components/Departure'
import Arrival from './components/Arrival';

import Current_flight_plan from './components/Current_flight_plan'
import Estimate from './components/Estimate'
import Coordination from './components/Coordination'
import Acceptance from './components/Acceptance'
import Logical_acknowledgement from './components/Logical_acknowldgement'

import Request_flight_plan from './components/Request_flight_plan'
import Request_supplementary_flight_plan from './components/Request_supplementary_flight_plan'
import Supplementary_flight_plan from './components/Supplementary_flight_plan'


function load() {
  return (
        <ul className="header">
          <li class="red column">
         
            <NavLink to="/Alerting">
              <h3>Alerting</h3>
            </NavLink>
          </li>
          <li>
            <NavLink to="/Radio_communication_failure ">
              <h3>Radio_communication_failure </h3>
            </NavLink>
          </li><br/>

          <li>
            <NavLink to="/Filed_flight_plan">
              <h3>Filed_flight_plan</h3>
            </NavLink>
          </li>
          <li>
            <NavLink to="/Modification">
              <h3>Modification </h3>
            </NavLink>
          </li>
          <li>
            <NavLink to="/Cancellation">
              <h3>Cancellation</h3>
            </NavLink>
          </li>
          <li>
            <NavLink to="/Delay">
              <h3>Delay</h3>
            </NavLink>
          </li>
          <li>
            <NavLink to="/Departure">
              <h3>Departure</h3>
            </NavLink>
          </li>
          <li>
            <NavLink to="/Arrival">
              <h3>Arrival </h3>
            </NavLink>
          </li><br/>

          <li>
            <NavLink to="/Current_flight_plan">
              <h3>Current_flight_plan</h3>
            </NavLink>
          </li>
          <li>
            <NavLink to="/Estimate">
              <h3>Estimate</h3>
            </NavLink>
          </li>
          <li>
            <NavLink to="/Coordination">
              <h3>Coordination</h3>
            </NavLink>
          </li>
          <li>
            <NavLink to="/Acceptance">
              <h3>Acceptance</h3>
            </NavLink>
          </li>
          <li>
            <NavLink to="/Logical_acknowledgement">
              <h3>Logical_acknowledgement </h3>
            </NavLink><br/>
          </li>

          <li>
            <NavLink to="/Request_flight_plan">
              <h3>Request_flight_plan</h3>
            </NavLink>
          </li>
          <li>
           <NavLink to="/Request_supplementary_flight_plan">
              <h3>Request_supplementary_flight_plan</h3>
            </NavLink>
          </li>
          <li>
            <NavLink to="/Supplementary_flight_plan">
              <h3>Supplementary_flight_plan</h3>
            </NavLink>
          </li>
        </ul>
  )
}
function Main(){
  return(
    
    <div className="UI-container">
    
    <BrowserRouter>
        <Route path="/" exact component={load} />
        <Route path="/Alerting" exact component={Alerting} />
        <Route path="/Radio_communication_failure " exact component={Radio_communication_failure } />
        <Route path="/Filed_flight_plan" exact component={Filed_flight_plan} />
        <Route path="/Modification" exact component={Modification}  />
        <Route path="/Cancellation" exact component={Cancellation} />
        <Route path="/Delay" exact component={Delay} />
        <Route path="/Departure" exact component={Departure} />
        <Route path="/Arrival" exact component={Arrival} />
        <Route path="/Current_flight_plan" exact component={Current_flight_plan} />
        <Route path="/Estimate" exact component={Estimate} />
        <Route path="/Coordination" exact component={Coordination} />
        <Route path="/Acceptance" exact component={Acceptance} />
        <Route path="/Logical_acknowledgement" exact component={Logical_acknowledgement} />
        <Route path="/Request_flight_plan" exact component={Request_flight_plan} />
        <Route path="/Request_supplementary_flight_plan" exact component={Request_supplementary_flight_plan} />
        <Route path="/Supplementary_flight_plan" exact component={Supplementary_flight_plan} />

      </BrowserRouter>
    </div>
  );
}
export default Main;
