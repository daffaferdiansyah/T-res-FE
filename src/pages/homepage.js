import React from 'react'
import logo from '../assets/logo-white-removebg-preview 2.png'
import logouser from '../assets/user.png'
import logogedung from '../assets/cityscape.png'
import telkom from '../assets/5f55ae3c33eab.jpg'
import { Link } from 'react-router-dom'
import axios from 'axios';
import Swal from "sweetalert2";

function Homepage() {
  const [building, setBuilding] = React.useState([])

  React.useEffect(() => {
    axios.get('http://localhost:8080/place/view')
    .then(res => {
      setBuilding(res.data.data)
    })
  }, [])

  return (
    <div className="">
      <div className='fixed z-10 w-full'>
        <div className="flex justify-between bg-merah-bg py-2 w-full">
          <div className='w-3/12 ml-2'>
            <img src={logo} className='w-40 mt-2' alt="" />
          </div>
            <div class="bg-gray-200 px-20 py-5 rounded-lg mr-20">
                <div className='grid grid-cols-2 gap-2'>
                    <div>
                        <img src={logouser} className='w-7' alt="" />
                    </div>
                    <div>HIMA IF</div>
                </div>
            </div>
        </div>
      </div>
      <div className='bg-primary px-10 py-5 space-y-10 pt-32'>
        <div>
          <div className='font-bold text-white text-2xl'>Sayuran Segar</div>
          <div>
            <div className="grid grid-cols-4 gap-4 mt-5 px-10">
              {
                building.map((item, index) => {
                  return (
                    <Link key={index} to={`/detail/${item._id}`}>
                    <div className='w-[15rem] h-[20rem] bg-gray-300 rounded-xl bg-cover bg-center relative' style={{ backgroundImage: `url(${telkom})`}}>                
                      <div className='absolute bottom-0 px-2 bg-gray-400 w-full h-20 text-center rounded-xl'>
                        <p className='text-xl font-bold font-Montserrat'>{item.nama}</p>
                      </div>
                    </div>
                    </Link>
                  )
                })
              }
            </div>
          </div>  
        </div>
      </div>
    </div>
  );
}

export default Homepage