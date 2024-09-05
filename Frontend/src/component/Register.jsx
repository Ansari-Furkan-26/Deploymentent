import React from 'react'
import {Form, Link} from "react-router-dom";


function Register() {
  return (
    <div className="w-full h-screen bg-[#FAF5FF] p-5">
          <div className='pt-16'>
              <Link to="/Index"> <h1 className='text-center text-3xl font-bold text-[#534E55]'> Welcome!</h1></Link>
              <p className='text-center text-2xl text-[#808080] mt-4'>Sign up to continue</p>
          </div>

          <Form className='mt-12'>
              <input className='p-5 bg-[#FFFFFF] rounded-2xl w-full drop-shadow-md' placeholder='Enter username' type='name'></input><br />
              <input className='p-5 mt-4 bg-[#FFFFFF] rounded-2xl w-full drop-shadow-md' placeholder='E-mail' type='email'></input><br />
              <input className='p-5 mt-4 bg-[#FFFFFF] rounded-2xl w-full drop-shadow-md' placeholder='Password' type='password'></input>
              <p className='text-right text-[#5B5B5E] mt-4'>Recovery Password</p>

              <Link to="/Verify"><button className='p-5 mt-8 bg-[#FE724C] rounded-2xl w-full drop-shadow-md' type='submit'>
                  <h1 className='text-center text-white font-medium text-lg'>GET OTP</h1>
              </button></Link>
          </Form>

          <Link to="/Login"><h2 className='text-center mt-6'>Already have an account? &nbsp;
              <span className='text-[#FE724C]'>Login</span></h2></Link>
              
              <div className=' mt-4 flex p-3'>
              <div className='h-px mt-3 w-24 bg-black' /><div />
              <h1 className='text-center'>&nbsp; Or continue with &nbsp;</h1>
              <div className='h-px mt-3 w-24 bg-black' /><div />
          </div>

          <div className='text-center mt-8'>
              GOOGLE
          </div>
    </div>
  )
}

export default Register