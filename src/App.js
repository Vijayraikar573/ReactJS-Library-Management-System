import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './components/Home';
import AdminLogin from './components/admin';
import UserLogin from './components/user';
import AdminPortal from './components/adminPortal';
import UserPortal from './components/userPortal';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/admin' element={<AdminLogin/>}/>
        <Route path='/user' element={<UserLogin/>}/>
        <Route path='/adminPortal/*' element={<AdminPortal/>}/>
        <Route path='/userPortal/*' element={<UserPortal/>}/>
        
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
