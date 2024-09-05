import React from 'react'
import {Form, Link} from "react-router-dom";


function Verify() {
  return (
    <div className="w-full h-screen bg-[#FAF5FF] p-5">
        <div className='pt-36'>
           <Link to="/Index"> <h1 className='text-center text-3xl font-bold text-[#534E55]'>Login</h1></Link>
            <p className='text-center text-lg text-[#5B5B5E] mt-12'>An OTP has been sent to 7045XXXXXX</p>
        </div>

        <Form className='mt-4'>
            <input className='p-5 mt-4 bg-[#FFFFFF] rounded-2xl w-full drop-shadow-md' placeholder='Enter OTP' type='password'></input>
            <p className='text-right text-[#5B5B5E] mt-4'>Re-send OTP</p>

            <Link to="/Notification"><button className='p-5 mt-8 bg-[#FE724C] rounded-2xl w-full drop-shadow-md' type='submit'>
                <h1 className='text-center text-white font-medium text-lg'>VERIFY OTP</h1>
            </button></Link>
        </Form>

        <Link to="/Login"><h2 className='text-center mt-7'>Already have an account? &nbsp;
              <span className='text-[#FE724C]'>Login</span></h2></Link>

        <div className=' mt-20 flex p-3'>
           <div className='h-px mt-3 w-24 bg-black'/><div/> 
           <h1 className='text-center'>&nbsp; Or continue with &nbsp;</h1>
           <div className='h-px mt-3 w-24 bg-black'/><div/> 
        </div>

        <div className='text-center mt-8'>
            GOOGLE
        </div>
    </div>
  )
}

export default Verify