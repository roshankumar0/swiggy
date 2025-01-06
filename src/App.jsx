
import { Route, Routes } from 'react-router-dom';
import './App.css';
import MyAccount from './MyAccount';
import Login from './Login';
import SearchPage from './pages/Search';
import Corporate from './pages/corporat'
import Bussiness from './pages/bussiness';
import Delivering from './pages/Delivering'
import Newsroom from './Components/Newsroom';
import Investors from './Components/Investors';
import ContactUs from './Components/ContactUs';
import Sustainability from './Components/Sustainability';
import Home from './Components/Home';
function App() {
  
  return (
    <Routes>
      <Route
        path="/"
        element={<Home/>}
      />
      <Route path='/my-account' element={<MyAccount />} />
      <Route path='/login' element={<Login />} />
      <Route path='/search' element={<SearchPage />} />
      <Route path='/corporate' element={<Corporate />} />
      <Route path='/bussiness' element={<Bussiness />} />
      <Route path='/delivering' element={<Delivering />} />
      <Route path='/newsroom' element={<Newsroom />} />
      <Route path='/investor' element={<Investors />} />
      <Route path='/contactus' element={<ContactUs />} />
      <Route path='/sustainability' element={<Sustainability />} />

    </Routes>
  );
}

export default App;
