import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import { Switch,Route,Redirect } from 'react-router';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Service from './Service';
import Navigation from './Navigation';

function App() {
  return (

    <>
<Navigation/>

    <Switch>

      <Route path='/' exact component={Home}/>
      <Route path='/about' exact component={About}/>
      <Route path='/service' exact component={Service}/>
      <Route path='/contact' exact component={Contact}/>
      <Redirect to='/' />



    </Switch>


  </>
  );
}

export default App;
