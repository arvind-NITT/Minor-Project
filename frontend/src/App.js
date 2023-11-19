
import './App.css';
import Form from './component/Form';
import Home from './component/Home';
import Form1_l2 from './component/Form1_l2';
import Form2_l2 from './component/Form2_l2';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import Navbar from './component/Navbar';
// import Footer from './component/Footer';
import Login from './component/Login';
import VerifyOtp from './component/VerifyOtp';
import Project_states from './context/Project_states';
import Alert from './component/Alert';
import Hod_Home from './component/Hod_Home';
import Protected, {Public, Admin, HOD } from "./middleware/route";
import UserDetailsPage from './component/Userdetails';
function App() {
  return (
    <>
  <Project_states>
 <BrowserRouter>
 {/* <Navbar></Navbar> */}
 <Alert/>
    <Routes>
      <Route exact path="/" element={<Login />} />
      <Route exact path="/Home" element={<Protected><Home /></Protected>} />
      <Route exact path="/hodhome" element={
        <HOD>
         <Hod_Home/>
        </HOD>
      } />
      <Route exact path="/form" element={
        <Protected><Form /></Protected>
      }
       />
      <Route exact path="/form1_l2" element={<Protected><Form1_l2 /></Protected>} />
      <Route exact path="/form2_l2" element={<Protected><Form2_l2 /></Protected>}/>
      <Route exact path="/login" element={<Login/>} />
      <Route exact path="/UserDetails" element={<UserDetailsPage/>} />
      <Route exact path="/verifyOtp" element={<VerifyOtp/>} />
       {/* Add the '/form' route */}
    </Routes>
  {/* <Footer></Footer> */}
    </BrowserRouter>
    </Project_states>
    </>
  );
}

export default App;
