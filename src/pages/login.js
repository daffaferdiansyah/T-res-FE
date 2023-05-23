import React from 'react'
import logoputih from '../assets/logo-white-removebg-preview 2.png'
import logotelkom from '../assets/telkom-university-logo.png'
function Login() {
  return (
    <div>
        <div className='flex h-screen'>
            <div className='w-1/2 bg-merah-bg'>
                <div class="flex items-center justify-center h-screen">
                    <div class="bg-white bg-opacity-50 p-8 rounded-lg">
                    <img src={logoputih} alt="" />
                    </div>
                </div>
            </div>
            <div className='w-1/2 bg-primary'>
                <div className='flex justify-center items-center h-screen'>
                    <img src={logotelkom} alt="" />
                    <form>
                        <div class="mb-4">
                            <label for="username" class="block text-gray-700 font-semibold mb-2">Username</label>
                            <input type="text" id="username" class="w-full px-4 py-2 border border-gray-300 rounded" placeholder="Enter your username"/>
                        </div>
                        <div class="mb-4">
                            <label for="password" class="block text-gray-700 font-semibold mb-2">Password</label>
                            <input type="password" id="password" class="w-full px-4 py-2 border border-gray-300 rounded" placeholder="Enter your password"/>
                        </div>
                        <button type="submit" class="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded">Log In</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Login