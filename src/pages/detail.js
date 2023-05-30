import React, {useState} from 'react'
import back from '../assets/left-arrow (2).png'
import gsg from '../assets/gsg.jpeg'
// import Datepicker from 'flowbite-datepicker/Datepicker';
import flowbit from '../../node_modules/flowbite/dist/flowbite.min.js'
// import duit from '../aset/saldo.png'
// import {
//   Datepicker,
//   Input,
//   initTE,
// } from "tw-elements";

// initTE({ Datepicker, Input });
import Datepicker from "react-tailwindcss-datepicker";



export default function Details() {
  const [value, setValue] = useState({
    startDate: new Date(),
    endDate: new Date().setMonth(11)
  });

  const handleValueChange = (newValue) => {
      console.log("newValue:", newValue);
      setValue(newValue);
  }
  return (
    <div>
      <script src={flowbit}></script>
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
              
            <Datepicker
                value={value}
                onChange={handleValueChange}
            />

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
