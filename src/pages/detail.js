import React from 'react'
import back from '../assets/left-arrow (2).png'
import gsg from '../assets/gsg.jpeg'
// import duit from '../aset/saldo.png'


export default function Details() {
  return (
    <div>
      <div className='flex bg-white py-2 w-full'>
        <div>
          <a href="/homepage" className='grid grid-cols-2 ml-2 mt-2'>
            <img src={back} className='w-5 ml-3 ' alt="" />
            <p class='font-sans font-bold ml-0'>kembali</p>
          </a>
        </div>
      </div>
      <div className='flex bg-primary h-screen'>
        <div className="grid grid-rows-2 mt-5 px-10">
          <div className='grid grid-cols-2 justify-center'>
            <div>
                <img src={gsg} class="w-3/5 h-auto rounded-2xl" alt="" />
            </div>
            <div class="text-6xl font-bold rounded-lg text-center">
                <p>GEDUNG SERBA GUNA</p>
            </div>
          </div>
          <div className='grid grid-cols-3'>
            <div>
              
<div class="relative max-w-sm">
  <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
    <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path></svg>
  </div>
  <input datepicker type="text" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Select date">
</div>

            </div>
            <div>b</div>
            <div className='grid grid-flow-row'>
                <div>
                    <p>Deskripsi</p>
                </div>
                <div>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam aliquam eget nisl id aliquet. Mauris vitae turpis vitae sapien scelerisque dapibus nec sollicitudin magna. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Ut venenatis lobortis arcu non feugiat. Duis nisl justo, posuere facilisis fermentum sed, tincidunt quis felis. Etiam lacus dui, euismod non ornare nec, gravida at sapien. 
                </div>
                <div>
                    Fasilitas : Sound system, microphone, proyektor
                </div>
                <div>
                    Kapasitas ~2500 orang
                </div>
            </div>
          </div>
        </div>

      </div>
    </div>
    
  )
}
