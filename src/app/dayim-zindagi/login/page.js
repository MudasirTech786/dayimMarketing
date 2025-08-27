import Link from 'next/link'
import React from 'react'

function Login() {
  return (
    <div className='flex items-center justify-center min-h-screen w-full bg-[#1819ab]'>
      <div className='bg-white min-w-[200px] flex flex-col items-center rounded-lg px-14 py-6 
                      sm:min-w-[500px]'>
        <img src="/images/dayim_logo1.png" className='h-[130px]' />
        <h3 className='font-bold uppercase'>Login</h3>

        <form className='flex flex-col w-full'>
          <label htmlFor="email" className='text-sm'>Email</label>
          <input 
            type="text" 
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

          <div className='flex items-center justify-between mt-2'>
            <div >
              <input type="checkbox" id='remember' />
              <label htmlFor="remember" className='text-sm ml-2'>Remember Me</label>
            </div>

            <Link href="#" className='text-sm text-blue-600 underline font-bold'>Forgot Password?</Link>
          </div>

          <button
            className='bg-[#1819ab] w-full text-white rounded-full p-3 uppercase text-sm mt-5'
          >Login</button>

          <div className='mt-3'>
            <p className='text-sm text-center'>
              Don&apos;t have an account? 
              <Link href="/register" className='ml-2 text-blue-600 underline font-bold'>Create an account</Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login