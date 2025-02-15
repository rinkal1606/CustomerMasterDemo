import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"
import Navbaar from './components/Navbaar';
import Home from './components/Home';
import CustomerMaster from './components/CustomerMaster';
import Edit from './components/Edit';
import Details from './components/Details';
import {Switch,Route} from "react-router-dom"
import Login from './components/Login.js';




function App() {
  return (
   <>
    <Navbaar />
    <Switch>
      {/* <Route exact path="/" component={Home} /> */}
      <Route exact path="/" component={Login} />
      <Route exact path="/home" component={Home} />
      <Route exact path="/CustomerMaster" component={CustomerMaster} />
      <Route exact path="/edit/:id" component={Edit} />
      <Route exact path="/view/:id" component={Details} />
    </Switch>
   
   </>
  );
}

export default App;







