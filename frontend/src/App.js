
import './App.css';
import {BrowserRouter as Router,Routes, Route} from 'react-router-dom';

import Loginpage from './login/loginpage';
import Registerpage from './register/Registerpage';
import Createorder from './createorder/createorder';
import Products from './productspage/Products';
import Pastorderspage from './pastorders/Pastorderspage';

function App() {
  return (
    
    <Router>
      <Routes>
      
        <Route exact path='/' element={<Loginpage/>}/>
        <Route exact path='/register' element={<Registerpage/>}/>
        <Route exact path='/createorderpage' element={<Createorder/>}/>
        <Route exact path='/Productspage' element={<Products/>}/>
        <Route exact path='/Pastorders' element={<Pastorderspage/>}/>
        
      </Routes>

    </Router>
    
  );
}

export default App;
