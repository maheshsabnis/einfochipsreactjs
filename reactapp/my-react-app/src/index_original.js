// importing React object  
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
// importing CSS
import './index.css';

import './../node_modules/bootstrap/dist/css/bootstrap.min.css';
// imporing the other Exportable types from  other files
import App from './App';
// the React.js bundling and build utility provided by create-react-app
import reportWebVitals from './reportWebVitals';

import SimpleComponent from './components/simplecomponent/simplecomponent';
import EmployeeComponent from './components/employeecomponent/employeecomponent';
import ParentComponent from './components/lifecyclecomponents/lifecyclecomponent';

import ContainerComponent from './components/errorboundries/errorBoundryComponent';
import EmployeeValidationComponent from './components/validationcomponent/employeecomponentvalid';

import HttpCallComponent from './components/httpcallcomponent/httpcallcomponent'

import DemoComponent from './functionalcomponents/funcComponent';


import SimpleHookComponent from './hooks/simplehookcomponent';

import StateComponent  from './hooks/statecomponent';

import UseEffectAjaxComponent from './hooks/useEffectAjax';

import ToggleComponent from './hooks/useeffectlifecycle/toggleComponent';

import UseReducerCustomHookComponent from './hooks/useReducerForCustomHookComponent';
import MainRoutingComponent from './components/routingapp/mainroutingcomponent';
import OrderListComponent from './components/componentfortest/OrderList';
import EventComponent from './components/componentfortest/eventComponent';
// this will mount the component with its 
// compiled HTML on Browser and render it
// React.StrictMode, means that the string JS language
// specification w.r.t. react must be followed e.g. propety declarations, 
// attributes for HTML e.g. events, properties, etc must be valid   
// <App/> is the component that will be mounted
// this will be mounted in HTML element with is as 'root' on index.html

let parentMessage = "Hay Componant!!! I am message from Parent";

//  message={parentMessage}
// the 'message' will be JSX runtime attribute of which value is set using 'parentMessage'
// the {<PROPERTY-NAME>} is syntax for Uni-Directional Data flow
// <SimpleComponent message={parentMessage}/> expression means that the simple compoent will be
// communicated with value of 'parentMessage' property using 'message' props type creatrd by JSX 
// The SimpleComponent will read data from 'message' as this.props.message

ReactDOM.render(
  <React.StrictMode>
     <EventComponent/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
