
import './App.css';
import Form from './component/Form';
import Home from './component/Home';
import Form1_l2 from './component/Form1_l2';
import Form2_l2 from './component/Form2_l2';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './component/Navbar';
import Footer from './component/Footer';

function App() {
  return (
    <>
 <BrowserRouter>
 <Navbar></Navbar>
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/form" element={<Form />} />
      <Route exact path="/form1_l2" element={<Form1_l2 />} />
      <Route exact path="/form2_l2" element={<Form2_l2 />}/>
       {/* Add the '/form' route */}
    </Routes>
  <Footer></Footer>
    </BrowserRouter>
    </>
  );
}

export default App;
