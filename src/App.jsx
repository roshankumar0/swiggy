
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
import About from './Components/About';
import Layout from './Layout';
function App() {

  return (
    <Routes>
      <Route
        path="/"
        element={<Home />}
      />
      <Route path='/my-account' element={<MyAccount />} />
      <Route path='/login' element={<Login />} />
      <Route path='/search' element={<SearchPage />} />
      <Route path='/corporate' element={<Layout><Corporate /></Layout>} />
      <Route path='/bussiness' element={<Layout><Bussiness /></Layout>} />
      <Route path='/delivering' element={<Layout><Delivering /></Layout>} />
      <Route path='/newsroom' element={<Layout><Newsroom /></Layout>} />
      <Route path='/investor' element={<Layout><Investors /></Layout>} />
      <Route path='/contactus' element={<Layout><ContactUs /></Layout>} />
      <Route path='/sustainability' element={<Layout><Sustainability /></Layout>} />
      <Route path='/about' element={<Layout><About /></Layout>} />

    </Routes>
  );
}

export default App;
