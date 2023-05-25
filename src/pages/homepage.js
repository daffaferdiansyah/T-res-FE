import React from 'react'
function Homepage() {
  return (
    <div className="">
      <div className='fixed z-10'>
        <div className="flex items-center justify-between bg-purple-900 py-2">
          <div className='w-3/12'>
            abc
          </div>
          <div className='w-5/12'>
            <input type="text" placeholder='lagi cari apa nih' className='w-full py-2 px-5 rounded-xl' />
          </div>
          <div className='w-4/12'>
            <div className="flex items-center justify-center">
              <a href = 'editprofile'>
                abc
              </a>
              <a href = 'editprofile' className='font-bold text-white ml-2'>
                Lele Terbang
              </a>
              <div className='text-white ml-10'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='bg-primary px-10 py-5 space-y-10 pt-32'>
        <div>
          <div className='font-bold text-white text-2xl'>Sayuran Segar</div>
          <div>
            <div className="grid grid-cols-5 gap-4 mt-5 px-10">
              <div className='w-[15rem] h-[20rem] bg-gray-300 rounded-xl bg-cover bg-center relative' style={{ backgroundImage: `url("https://cdn0-production-images-kly.akamaized.net/iZQHpRquiMoCtSBIenbAIOuDofA=/640x360/smart/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/1018928/original/082399700_1444710907-tomat-rsmadkotakediri.jpg")` }}>
                <div className='absolute bottom-0 px-2 bg-gray-400 w-full h-20 text-center rounded-xl'>
                  <p className='text-xl font-bold font-Montserrat'>Tomat segar</p>
                  <p className='text-l font-Montserrat'>Rp10.000/kg</p>
                </div>
              </div>
              <div className='w-[15rem] h-[20rem] bg-gray-300 rounded-xl bg-cover bg-center relative' style={{ backgroundImage: `url("https://www.astronauts.id/blog/wp-content/uploads/2022/08/Tidak-Cepat-Layu-Ini-Cara-Menyimpan-Sayur-Bayam-Di-Kulkas-1024x683.jpg")` }}>
                <div className='absolute bottom-0 px-2 bg-gray-400 w-full h-20 text-center rounded-xl'>
                  <p className='text-xl font-bold font-Montserrat'>Bayam segar</p>
                  <p className='text-l font-Montserrat'>Rp15.000/kg</p>
                </div>
              </div>
              <div className='w-[15rem] h-[20rem] bg-gray-300 rounded-xl bg-cover bg-center relative' style={{ backgroundImage: `url("https://images.tokopedia.net/img/cache/500-square/product-1/2017/3/4/4725451/4725451_abf37e17-9477-4077-bace-b90a2e9b5b2d_320_424.jpg")` }}>
                <div className='absolute bottom-0 px-2 bg-gray-400 w-full h-20 text-center rounded-xl'>
                  <p className='text-xl font-bold font-Montserrat'>Terong segar</p>
                  <p className='text-l font-Montserrat'>Rp15.000/kg</p>
                </div>
              </div>
              <div className='w-[15rem] h-[20rem] bg-gray-300 rounded-xl bg-cover bg-center relative' style={{ backgroundImage: `url("https://jagad.id/wp-content/uploads/2020/05/Gambar-1-Sawi-Hijau.jpeg")` }}>
                <div className='absolute bottom-0 px-2 bg-gray-400 w-full h-20 text-center rounded-xl'>
                  <p className='text-xl font-bold font-Montserrat'>Sawi segar</p>
                  <p className='text-l font-Montserrat'>Rp15.000/kg</p>
                </div>
              </div>
              <div className='w-[15rem] h-[20rem] bg-gray-300 rounded-xl bg-cover bg-center relative' style={{ backgroundImage: `url("https://jovee.id/wp-content/uploads/2020/05/Tauge.jpg")` }}>
                <div className='absolute bottom-0 px-2 bg-gray-400 w-full h-20 text-center rounded-xl'>
                  <p className='text-xl font-bold font-Montserrat'>Tauge segar</p>
                  <p className='text-l font-Montserrat'>Rp2.000/kg</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className='font-bold text-white text-2xl'>Daging Segar</div>
          <div>
            <div className="grid grid-cols-5 gap-4 mt-5 px-10">
              <div className='w-[15rem] h-[20rem] bg-gray-300 rounded-xl bg-cover bg-center relative' style={{ backgroundImage: `url("https://images.tokopedia.net/img/cache/700/VqbcmM/2020/8/5/1ea56086-5d12-4ecb-a380-c43c7089ebdc.jpg")` }}>
                <div className='absolute bottom-0 px-2 bg-gray-400 w-full h-20 text-center rounded-xl'>
                  <p className='text-xl font-bold font-Montserrat'>Wagyu A5</p>
                  <p className='text-l font-Montserrat'>Rp3.000.000/kg</p>
                </div>
              </div>
              <div className='w-[15rem] h-[20rem] bg-gray-300 rounded-xl bg-cover bg-center relative' style={{ backgroundImage: `url("https://www.hypermart.co.id/wp-content/uploads/elementor/thumbs/86-p5q08m83h136juzivxbywdb3s4excvjyt9beupjf2w.jpg")` }}>
                <div className='absolute bottom-0 px-2 bg-gray-400 w-full h-20 text-center rounded-xl'>
                  <p className='text-xl font-bold font-Montserrat'>Daging Kambing</p>
                  <p className='text-l font-Montserrat'>Rp168.000/kg</p>
                </div>
              </div>
              <div className='w-[15rem] h-[20rem] bg-gray-300 rounded-xl bg-cover bg-center relative' style={{ backgroundImage: `url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaIxy1bpCri8qDiucNUa8Jaedw6RVzvqID_A&usqp=CAU")` }}>
                <div className='absolute bottom-0 px-2 bg-gray-400 w-full h-20 text-center rounded-xl'>
                  <p className='text-xl font-bold font-Montserrat'>Daging ayam giling</p>
                  <p className='text-l font-Montserrat'>Rp45.000/kg</p>
                </div>
              </div>
              <div className='w-[15rem] h-[20rem] bg-gray-300 rounded-xl bg-cover bg-center relative' style={{ backgroundImage: `url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTycpHP9Ek1aVuqbh2P3HSlGpxMf9cf_8HnLQ&usqp=CAU")` }}>
                <div className='absolute bottom-0 px-2 bg-gray-400 w-full h-20 text-center rounded-xl'>
                  <p className='text-xl font-bold font-Montserrat'>Daging ayam cincang</p>
                  <p className='text-l font-Montserrat'>Rp59.000/kg</p>
                </div>
              </div>
              <div className='w-[15rem] h-[20rem] bg-gray-300 rounded-xl bg-cover bg-center relative' style={{ backgroundImage: `url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkw2C8c11pXzdc_SvWPLK30kX0J-GuEIaaPQ&usqp=CAU")` }}>
                <div className='absolute bottom-0 px-2 bg-gray-400 w-full h-20 text-center rounded-xl'>
                  <p className='text-xl font-bold font-Montserrat'>Daging ikan salmon</p>
                  <p className='text-l font-Montserrat'>Rp33.000/100g</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className='font-bold text-white text-2xl'>Karbohidrat</div>
          <div>
            <div className="grid grid-cols-5 gap-4 mt-5 px-10">
              <div className='w-[15rem] h-[20rem] bg-gray-300 rounded-xl bg-cover bg-center relative' style={{ backgroundImage: `url("https://d324bm9stwnv8c.cloudfront.net/artikel/20180912072418.689-1909513443.png")` }}>
                <div className='absolute bottom-0 px-2 bg-gray-400 w-full h-20 text-center rounded-xl'>
                  <p className='text-xl font-bold font-Montserrat'>Beras</p>
                  <p className='text-l font-Montserrat'>Rp40.000/kg</p>
                </div>
              </div>
              <div className='w-[15rem] h-[20rem] bg-gray-300 rounded-xl bg-cover bg-center relative' style={{ backgroundImage: `url("https://cdn1-production-images-kly.akamaized.net/BekfBIT0yMHJpIxY-N60lX3zwXU=/1200x900/smart/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/3411829/original/011602500_1616733537-photo-1518977676601-b53f82aba655.jpg")` }}>
                <div className='absolute bottom-0 px-2 bg-gray-400 w-full h-20 text-center rounded-xl'>
                  <p className='text-xl font-bold font-Montserrat'>Kentang</p>
                  <p className='text-l font-Montserrat'>Rp10.000/kg</p>
                </div>
              </div>
              <div className='w-[15rem] h-[20rem] bg-gray-300 rounded-xl bg-cover bg-center relative' style={{ backgroundImage: `url("https://imgx.parapuan.co/crop/0x0:0x0/x/photo/2022/08/28/tips-memilih-jagungjpg-20220828092415.jpg")` }}>
                <div className='absolute bottom-0 px-2 bg-gray-400 w-full h-20 text-center rounded-xl'>
                  <p className='text-xl font-bold font-Montserrat'>Jagung</p>
                  <p className='text-l font-Montserrat'>Rp12.000/kg</p>
                </div>
              </div>
              <div className='w-[15rem] h-[20rem] bg-gray-300 rounded-xl bg-cover bg-center relative' style={{ backgroundImage: `url("http://blog.sayurbox.com/wp-content/uploads/2020/09/potatoes-2078775_1920.jpg")` }}>
                <div className='absolute bottom-0 px-2 bg-gray-400 w-full h-20 text-center rounded-xl'>
                  <p className='text-xl font-bold font-Montserrat'>Kentang Merah</p>
                  <p className='text-l font-Montserrat'>Rp10.000/kg</p>
                </div>
              </div>
              <div className='w-[15rem] h-[20rem] bg-gray-300 rounded-xl bg-cover bg-center relative' style={{ backgroundImage: `url("https://statik.tempo.co/data/2016/11/28/id_559983/559983_620.jpg")` }}>
                <div className='absolute bottom-0 px-2 bg-gray-400 w-full h-20 text-center rounded-xl'>
                  <p className='text-xl font-bold font-Montserrat'>Beras Merah</p>
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