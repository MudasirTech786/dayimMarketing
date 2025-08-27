import Link from 'next/link'
import React from 'react'

function Register() {
  return (
    <div className='flex items-center justify-center min-h-screen w-full bg-[#1819ab]'>
      <div className='bg-white min-w-[200px] flex flex-col items-center rounded-lg px-14 py-6 
                      sm:min-w-[500px]'>
        <img src="/images/dayim_logo1.png" className='h-[130px]' />
        <h3 className='font-bold uppercase'>Create Account</h3>

        <form className='flex flex-col w-full'>
          <label htmlFor="name" className='text-sm'>Name</label>
          <input 
            type="text" 
            placeholder='Enter Name' 
            id='name'
            className='outline-none border border-gray-300 rounded-full px-5 py-2.5 mt-1
                        focus:border-gray-500' 
          />

          <label htmlFor="email" className='text-sm mt-5'>Email</label>
          <input 
            type="email" 
            placeholder='Enter Email' 
            id='email'
            className='outline-none border border-gray-300 rounded-full px-5 py-2.5 mt-1
                    focus:border-gray-500' 
          />

          <label htmlFor="password" className='text-sm mt-5'>Password</label>
          <input 
            type="password" 
            placeholder='Enter Password' 
            id='password'
            className='outline-none border border-gray-300 rounded-full px-5 py-2.5 mt-1
                    focus:border-gray-500' 
          />

          <label htmlFor="confirm_password" className='text-sm mt-5'>Confirm Password</label>
          <input 
            type="password" 
            placeholder='Confirm Password' 
            id='confirm_password'
            className='outline-none border border-gray-300 rounded-full px-5 py-2.5  mt-1
                    focus:border-gray-500' 
          />

        <div className='mt-5'>
            <input type="checkbox" id='terms' />
            <label htmlFor="terms" className='text-sm ml-2'>
                I accept the <Link href="#" className='text-blue-600 underline font-bold'>Terms & Conditions</Link> 
            </label>
        </div>            

          <button
            className='bg-[#1819ab] w-full text-white rounded-full p-3 uppercase text-sm mt-5'
          >Register</button>

          <div className='mt-3'>
            <p className='text-sm text-center'>
              Already have an account?
              <Link href="/login" className='ml-2 text-blue-600 underline font-bold'>Login</Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Register