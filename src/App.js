import React , {useState} from 'react';
import {BrowserRouter as Router , Route ,Link} from 'react-router-dom';
import Home from './components/Home.js';
import Category from './components/Category.js';
import Products from './components/Products.js';
import Admin from './components/Admin.js';
import ProtectedRoute from './components/ProtectedRoute';
import Login from './components/Login';


function App() {

 const [isLogged,setIsLogged]=useState(false);
 const handleLogin=()=>{
   setIsLogged(true);
 }
  return (
    <Router>
    <div className="App">
     <ul>
    <li>  <Link to='/'>Home</Link> </li>
    <li> <Link to='/category'>Category</Link> </li>
     <li><Link to='/products'>Products</Link> </li>
    <li>  <Link to='/admin'>Admin Area</Link> </li>
    </ul>

      <Route path='/' exact component={Home}/>
      <Route path='/products' component={Products}/>
      <Route path='/category' component={Category}/>
      <ProtectedRoute path='/admin' isLogged={isLogged} component={Admin}/>
      <Route path='/login' render={(props)=><Login isLogged={isLogged} handleLogin={handleLogin} {...props}/>}/>
      
    
    </div>
    </Router>
  );
}

export default App;
