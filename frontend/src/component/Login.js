import React,{useContext, useState} from 'react'
import { useNavigate } from 'react-router-dom';
import ProjectContext from '../context/Contexts';
import { Link,Outlet } from 'react-router-dom';
import Style from './Styles1.css'
export default function Login() {
  const context= useContext(ProjectContext);  
  const { showAlert,username,setusername}=context;
  const [user,setUser]=useState(null)
  const Onchange=(e)=>{
    setUser({...user,[e.target.name]:e.target.value})
   console.log(user)
   
  }
  const navigate = useNavigate();
  const onclickhandle2= async (e)=>{
  //   const Url_to_Signup = 'http://localhost:5000/api/auth/signup'
  //   const response = await fetch(Url_to_Signup, {
  //     method: 'POST', // or 'PUT'
  //     headers: {
  //       'Content-Type': 'application/json',
  //       "Access-Control-Allow-Origin": "*"
  //     },
  //     body: JSON.stringify( {name:user.name,email:user.email,password:user.password} ),
  //   })
  //   console.log(user);
  //   const token = await response.json();
  //   // console.log(ret_data);
  // // console.log(token.errors[0].msg)
  //   if(token.success===true) 
  //   {
  //     // localStorage.setItem('token',token.authtoken);
  //     // console.log(token.authtoken)
      navigate('/Verifyotpforforgotpassword',{replace:true});
  //      showAlert("Check your mail ","success")
  //   }else{
  //       showAlert(token.message,"danger") 
  //     }
  }   
  const onclickhandle1= async (e)=>{
    console.log("reaching it ....");
    const Url_to_Signup = 'http://localhost:5000/api/auth/signup'
    const response = await fetch(Url_to_Signup, {
      method: 'POST', // or 'PUT'
      headers: {
        'Content-Type': 'application/json',
        "Access-Control-Allow-Origin": "*"
      },
      body: JSON.stringify( {name:user.name,email:user.email,password:user.password} ),
    })
    console.log(user);
    const token = await response.json();
    // console.log(ret_data);
  // console.log(token.errors[0].msg)
    if(token.success===true) 
    {
      // localStorage.setItem('token',token.authtoken);
      // console.log(token.authtoken)
      navigate('/Verifyotp',{replace:true});
       showAlert("Check your mail ","success")
    }else{
        showAlert(token.message,"danger") 
      }
  }
  const onclickhandle= async (e)=>{
    console.log("Le tera user dekh le",user.password);

     console.log(user.password);
         if(user.password==undefined || user.email ==undefined){
          showAlert("Kya kr rha he bhai ye ","danger");
         }
    const Url_to_login = 'http://localhost:5000/api/auth/login'
    const response = await fetch(Url_to_login, {
      method: 'POST', // or 'PUT'
      headers: {
        'Content-Type': 'application/json',
        "Access-Control-Allow-Origin": "*"
      },
      body: JSON.stringify( {email:user.email,password:user.password} ),
    })
    const token = await response.json(); 
    // console.log(ret_data); 

  console.log(token) 
    if(token.success===true)
    {
      localStorage.setItem('token',token.authtoken);

      setusername(user.email) 
      navigate('/',{replace:true}); 
      showAlert("Login SuccessFully","success");
    }else{
        showAlert(token.message,"danger")
      }
  }
  return (
     <div className='bodyc'>
    <div className="main" style={Style}>  
		
		<input className='inputc' type="checkbox" id="chk" aria-hidden="true"/>
              
		
			<div className="login" style={Style}>
				{/* <form action="#" method="post"> */}
					<label for="chk" aria-hidden="true" className='labelc' style={Style}>Login</label>
          <input className='inputc' type="text" name="Name" placeholder="Name" onChange={Onchange} id="email" required="" style={Style}/>
					<input className='inputc' type="email" name="email" placeholder="Email" onChange={Onchange} id="email" required="" style={Style}/>
					<input className='inputc' type="password" onChange={Onchange} id="password" name='password' placeholder="Password" required="" style={Style}/>
          
					<button className='buttonc' onClick={onclickhandle} style={Style}>Login</button>
					<button className='buttonc' onClick={onclickhandle2} style={Style}>Forgot password</button>
				{/* </form> */}
				
				
			</div>
			<div className="signup" style={Style}>
				{/* <form action="/signup" method="post"> */}
					<label for="chk" aria-hidden="true" className='labelc' style={Style}>Sign up
					</label>
					<input className='inputc' type="text" name="name" placeholder="User name" onChange={Onchange} id="uname" required="" style={Style}/>
					<input className='inputc'  type="email" name="email" onChange={Onchange} id="email" placeholder="Email" required="" style={Style}/>
					<input className='inputc' type="password"onChange={Onchange} id="password" name='password' placeholder="Password" required="" style={Style}/>
          <input className='inputc' type="password" onChange={Onchange} id="password" name='verified' placeholder="Retype" required="" style={Style}/>
          <input className='inputc' type="text" name="collegeid" placeholder="College id" onChange={Onchange} id="uname" required="" style={Style}/>
          <input className='inputc' type="text" name="Department" placeholder="Department name" onChange={Onchange} id="uname" required="" style={Style}/>
          <input className='inputc' type="text" name="Mobileno" placeholder="Contact Number" onChange={Onchange} id="uname" required="" style={Style}/>



					<button type="submit" className='buttonc' onClick={onclickhandle1} style={Style}>Sign up</button>
					<button className='buttonc' type="submit"  style={Style}>
						<Link  to="/verifyOtp">Verify Otp</Link>
					 </button>
				{/* </form> */}
			</div>
      </div>
      </div> 

  )
}

{/* 
//     <div className="container min-vw-100 min-vh-100 p-3 d-flex justify-content-center align-items-center log" style={{ "background-color": "#100e17"}}>
//     <div className="container  logincards"> 
//     <form >
//      <div className="mb-3">
//   <label htmlFor="exampleFormControlInput1" className="form-label text-white">Email address</label>
//   <input type="email" className="form-control" onChange={Onchange} id="email" name='email' placeholder="name@example.com"/>
// </div>
      
      
// <div className="mb-3">
//   <label htmlFor="exampleFormControlTextarea1" className="form-label text-white">Password</label>
//   <input type="password" className="form-control" onChange={Onchange} id="password" name='password' placeholder="Enter Your Password"/>
// </div>
// <div className="mb-3 ">

// <button type="button" className="btn btn-primary " onClick={onclickhandle}>Login</button>
// </div>
// </form>
// <div className="container m-2 nav_links align-self-end">
//  <Link className='text-white ' to='/Signup' >  SignUp here</Link></div>
// </div> 
// <Outlet/>
//      </div>  */}