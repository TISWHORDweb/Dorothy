import './style.css';
import { BrowserRouter , Routes , Route } from "react-router-dom"
import Adminregister from './pages/Adminregister';
import Adminlogin from './pages/Adminlogin';
import Dashboard from './pages/Dashboard';
import Create_User from './pages/Create_User';
import Create_Product from './pages/Create_Product';
import All_User from './pages/All_User';
import All_Products from './pages/All_Products';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path='/' element={<Adminregister/>}/>
          <Route path='/adminlogin' element={<Adminlogin/>}/>
          <Route path='/dashboard' element={<Dashboard/>}/>
          <Route path='/user' element={<Create_User/>}/>
          <Route path='/product' element={<Create_Product/>}/>
          <Route path='/alluser' element={<All_User/>}/>
          <Route path='/allproducts' element={<All_Products/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
