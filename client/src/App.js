import Landing from './Components/Landing'
import Login from './Components/Login'
import Footer from './Components/Footer'
import Userlist from './Components/Admin/Userlist'
import Addevant from './Components/Admin/Addevant'
import Evants from './Components/Evants'
import Header from './Components/Header'
import Cartlist from './Components/Admin/Cartlist'
import pricing from './Components/Pricing'
import Evantlist from './Components/Evantlist'
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Testomonial from './Components/Testomonial'
import contact from './Components/Contact'
import loading from './Components/Loading'
import Slider from './Components/Slider'
import checkout from './Components/Checkout'
import addUser from './Components/Admin/Adduser'


function App() {
  return (
    <div >
      <Router>
        <Header/>
        <Switch>
          {/* <Landing/>
          <Checkout/>
          <Checkout/> */}
        <Route exact path = "/"> 
            <Landing/>
            <Evants/>
            <Testomonial/>
            <Slider/>
        </Route>
        <Route exact path = "/Login" component ={Login}/>
        <Route exact path = "/Users" component = {Userlist} />
        <Route exact path = "/Add" component = {Addevant} />
        <Route exact path = "/cartlist" component = {Cartlist} />
        <Route exact path = "/pricing" component = {pricing}/>
        <Route exact path = "/pricing/:id" component = {pricing}/>
        <Route exact path = "/evantlist" component = {Evantlist}/>
        <Route exact path = "/contact" component = {contact} />
        <Route exact path = "/Loading" component = {loading} />
        <Route exact path = "/checkout" component = {checkout}/>
        <Route exact path = "/singup" component = {addUser} />
        <Route exact path = "/singup/:id" component = {addUser} />

      </Switch>
      <Footer/>
      </Router>
      
    </div>
  );
}

export default App;
