import React, { useEffect, useState } from 'react'
import logoputih from '../assets/logo-white-removebg-preview 2.png'
import logotelkom from '../assets/telkom-university-logo.png'
import axios from 'axios';
import Swal from "sweetalert2";


function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const [errorMessages, setErrorMessages] = useState([]);

    useEffect(() => {
        let data = localStorage.getItem('data');
        if(data !== null){
            window.location.href = "homepage"
        }
    }, []);

    const formHandler = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8080/user/login', {
            username: username,
            password: password,
        }).then((res) => {  
            localStorage.setItem('data', JSON.stringify(res.data));
            setUsername('');
            setPassword('');
            return Swal.fire({
                heightAuto: false,
                icon: "success",
                title: "Berhasil",
                text: "Akun berhasil login",
                confirmButtonColor: "#8B5CF6",
                confirmButtonText: "Ok",
            }).then((res) => {
                if (res.isConfirmed) window.location.href = "/homepage";
            });
            
        }).catch((error) => {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Username or password invalid',
              })
            setPassword('');

            
        });
    }
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
            <div className='w-1/2 bg-primary bg-no-repeat bg-center' style={{backgroundImage: `url(${logotelkom})`}}>
                <div className='flex justify-center items-center h-screen'  >
                    <form onSubmit={formHandler}>
                        <div class="mb-4">
                            <label for="username" class="block text-gray-700 font-semibold mb-2">Username</label>
                            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} id="username" class="w-full px-4 py-2 border border-gray-300 rounded" placeholder="Enter your username"/>
                        </div>
                        <div class="mb-4">
                            <label for="password" class="block text-gray-700 font-semibold mb-2">Password</label>
                            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} id="password" class="w-full px-4 py-2 border border-gray-300 rounded" placeholder="Enter your password"/>
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