import './App.css';
 import Navbar from './components/Navebar'
// import Form from './components/Form'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Login from './components/Login'
import Signup from './components/Signup'
function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path='/' element={<Login />}/>
      <Route path='/Signup' element={<Signup />}/>
      <Route  />
    </Routes>
    </BrowserRouter>
    
    </>
    
  );
}

export default App;
