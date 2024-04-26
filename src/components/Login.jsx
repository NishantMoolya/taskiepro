import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom'
import { login } from '../redux/reducers/userReducer';
//import { motion } from 'framer-motion'
//import { route } from '../animations/routeAnim'

const Login = () => {
  const navigate = useNavigate();
  const userDispatch = useDispatch();
  const auth = useSelector(state => state.user.auth);
  useEffect(() => {
   if(auth) return navigate('/');
  },[auth])

  const [pass, setPass] = useState(true);

  const baseURL = process.env.REACT_APP_BASE_URL;
  const handleSignup = async (e) => {
    const { email, password } = formData;
    try {
      e.preventDefault();
      const data = await fetch(`${baseURL}/user/login`,{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        credentials:"include",
        body:JSON.stringify({email:email.trim(),password:password.trim()})   
       });
      const response = await data.json();
      if (data.status === 200) {
        alert("Login successful");
        userDispatch(login(response.userInfo));
        return navigate('/');
      } else if (data.status === 400) {
        return alert("invalid credentials");
      } else if (data.status === 401) {
        alert("Not a registered user");
        return navigate('/signup');
      }else {
        throw new Error("Server error");
      }
    } catch (err) {
      console.log(`En error occurred in login:${err}`);
      alert("An error occurred in server");
    }
    setFormData(initialData);
  }

  let initialData = {
    email: "",
    password: ""
  }

  const [formData, setFormData] = useState(initialData);

  const handleUserInput = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData, [name]: value
    });
  }
  document.title = "Login-Welcome Back to taskiepro";
    return (<div className='flex justify-center pt-24'>
      {!auth && <form className='flex flex-col gap-5 py-2 px-3 rounded shadow min-w-72 sm:min-w-80' method='POST' onSubmit={handleSignup}>
      <h4 className='text-violet-500 text-2xl font-bold text-center'>Login</h4>
        <div className='border border-violet-500 rounded py-1 px-2'>
          <input className='w-full text-base font-semibold outline-none placeholder:text-violet-400' placeholder='Email' autoComplete="true" value={formData.email} name='email' onChange={handleUserInput} required />
        </div>
        <div className='border border-violet-500 rounded py-1 px-2 flex items-center'>
        <input className='w-full text-base font-semibold outline-none placeholder:text-violet-400' type={pass ? 'password' : 'text'} autoComplete="true" placeholder='Password' value={formData.password} name='password' onChange={handleUserInput} required />
          {pass ?
              <svg onClick={() => setPass(false)} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                <path fillRule="evenodd" d="M3.28 2.22a.75.75 0 0 0-1.06 1.06l14.5 14.5a.75.75 0 1 0 1.06-1.06l-1.745-1.745a10.029 10.029 0 0 0 3.3-4.38 1.651 1.651 0 0 0 0-1.185A10.004 10.004 0 0 0 9.999 3a9.956 9.956 0 0 0-4.744 1.194L3.28 2.22ZM7.752 6.69l1.092 1.092a2.5 2.5 0 0 1 3.374 3.373l1.091 1.092a4 4 0 0 0-5.557-5.557Z" clipRule="evenodd" />
                <path d="m10.748 13.93 2.523 2.523a9.987 9.987 0 0 1-3.27.547c-4.258 0-7.894-2.66-9.337-6.41a1.651 1.651 0 0 1 0-1.186A10.007 10.007 0 0 1 2.839 6.02L6.07 9.252a4 4 0 0 0 4.678 4.678Z" />
              </svg>
              : <svg  onClick={() => setPass(true)} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                <path d="M10 12.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />
                <path fillRule="evenodd" d="M.664 10.59a1.651 1.651 0 0 1 0-1.186A10.004 10.004 0 0 1 10 3c4.257 0 7.893 2.66 9.336 6.41.147.381.146.804 0 1.186A10.004 10.004 0 0 1 10 17c-4.257 0-7.893-2.66-9.336-6.41ZM14 10a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z" clipRule="evenodd" />
              </svg>}
              </div>
              <button className='bg-violet-500 text-white text-base font-bold py-1 rounded shadow hover:scale-95' type='submit'>Login</button>
              <p className='text-center text-slate-500'>Don't have an account?<NavLink className="text-violet-500" to='/signup'>Signup</NavLink></p>
              </form>}
              </div>)
}

export default Login