import React from 'react'
import logo from '../assets/logo-white-removebg-preview 2.png'
import logouser from '../assets/user.png'
import logogedung from '../assets/cityscape.png'
import telkom from '../assets/5f55ae3c33eab.jpg'
function Homepage() {
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
              <div className='w-[15rem] h-[20rem] bg-gray-300 rounded-xl bg-cover bg-center relative' style={{ backgroundImage: `url(${telkom})`}}>
                <div className='absolute bottom-0 px-2 bg-gray-400 w-full h-20 text-center rounded-xl'>
                  <p className='text-xl font-bold font-Montserrat'>Tomat segar</p>
                  <p className='text-l font-Montserrat'>Rp10.000/kg</p>
                </div>
              </div>
              <div className='w-[15rem] h-[20rem] bg-gray-300 rounded-xl bg-cover bg-center relative' style={{ backgroundImage: `url(${telkom})`}}>                
                <div className='absolute bottom-0 px-2 bg-gray-400 w-full h-20 text-center rounded-xl'>
                  <p className='text-xl font-bold font-Montserrat'>Bayam segar</p>
                  <p className='text-l font-Montserrat'>Rp15.000/kg</p>
                </div>
              </div>
              <div className='w-[15rem] h-[20rem] bg-gray-300 rounded-xl bg-cover bg-center relative' style={{ backgroundImage: `url(${telkom})`}}>
                <div className='absolute bottom-0 px-2 bg-gray-400 w-full h-20 text-center rounded-xl'>
                  <p className='text-xl font-bold font-Montserrat'>Terong segar</p>
                  <p className='text-l font-Montserrat'>Rp15.000/kg</p>
                </div>
              </div>
              <div className='w-[15rem] h-[20rem] bg-gray-300 rounded-xl bg-cover bg-center relative' style={{ backgroundImage: `url(${telkom})`}}>
                <div className='absolute bottom-0 px-2 bg-gray-400 w-full h-20 text-center rounded-xl'>
                  <p className='text-xl font-bold font-Montserrat'>Sawi segar</p>
                  <p className='text-l font-Montserrat'>Rp15.000/kg</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className='font-bold text-white text-2xl'>Daging Segar</div>
          <div>
            <div className="grid grid-cols-4 gap-4 mt-5 px-10 justify-center">
              <div className='w-[15rem] h-[20rem] bg-gray-300 rounded-xl bg-cover bg-center relative' style={{ backgroundImage: `url(${telkom})`}}>
                <div className='absolute bottom-0 px-2 bg-gray-400 w-full h-20 text-center rounded-xl'>
                  <p className='text-xl font-bold font-Montserrat'>Wagyu A5</p>
                  <p className='text-l font-Montserrat'>Rp3.000.000/kg</p>
                </div>
              </div>
              <div className='w-[15rem] h-[20rem] bg-gray-300 rounded-xl bg-cover bg-center relative' style={{ backgroundImage: `url(${telkom})`}}>
                <div className='absolute bottom-0 px-2 bg-gray-400 w-full h-20 text-center rounded-xl'>
                  <p className='text-xl font-bold font-Montserrat'>Daging Kambing</p>
                  <p className='text-l font-Montserrat'>Rp168.000/kg</p>
                </div>
              </div>
              <div className='w-[15rem] h-[20rem] bg-gray-300 rounded-xl bg-cover bg-center relative' style={{ backgroundImage: `url(${telkom})`}}>
                <div className='absolute bottom-0 px-2 bg-gray-400 w-full h-20 text-center rounded-xl'>
                  <p className='text-xl font-bold font-Montserrat'>Daging ayam giling</p>
                  <p className='text-l font-Montserrat'>Rp45.000/kg</p>
                </div>
              </div>
              <div className='w-[15rem] h-[20rem] bg-gray-300 rounded-xl bg-cover bg-center relative' style={{ backgroundImage: `url(${telkom})`}}>
                <div className='absolute bottom-0 px-2 bg-gray-400 w-full h-20 text-center rounded-xl'>
                  <p className='text-xl font-bold font-Montserrat'>Daging ayam cincang</p>
                  <p className='text-l font-Montserrat'>Rp59.000/kg</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className='font-bold text-white text-2xl'>Karbohidrat</div>
          <div>
            <div className="grid grid-cols-4 gap-4 mt-5 px-10">
              <div className='w-[15rem] h-[20rem] bg-gray-300 rounded-xl bg-cover bg-center relative' style={{ backgroundImage: `url(${telkom})`}}>
                <div className='absolute bottom-0 px-2 bg-gray-400 w-full h-20 text-center rounded-xl'>
                  <p className='text-xl font-bold font-Montserrat'>Beras</p>
                  <p className='text-l font-Montserrat'>Rp40.000/kg</p>
                </div>
              </div>
              <div className='w-[15rem] h-[20rem] bg-gray-300 rounded-xl bg-cover bg-center relative' style={{ backgroundImage: `url(${telkom})`}}>
                <div className='absolute bottom-0 px-2 bg-gray-400 w-full h-20 text-center rounded-xl'>
                  <p className='text-xl font-bold font-Montserrat'>Kentang</p>
                  <p className='text-l font-Montserrat'>Rp10.000/kg</p>
                </div>
              </div>
              <div className='w-[15rem] h-[20rem] bg-gray-300 rounded-xl bg-cover bg-center relative' style={{ backgroundImage: `url(${telkom})`}}>
                <div className='absolute bottom-0 px-2 bg-gray-400 w-full h-20 text-center rounded-xl'>
                  <p className='text-xl font-bold font-Montserrat'>Jagung</p>
                  <p className='text-l font-Montserrat'>Rp12.000/kg</p>
                </div>
              </div>
              <div className='w-[15rem] h-[20rem] bg-gray-300 rounded-xl bg-cover bg-center relative' style={{ backgroundImage: `url(${telkom})`}}>
                <div className='absolute bottom-0 px-2 bg-gray-400 w-full h-20 text-center rounded-xl'>
                  <p className='text-xl font-bold font-Montserrat'>Kentang Merah</p>
                  <p className='text-l font-Montserrat'>Rp10.000/kg</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Homepage