import React, { forwardRef, useState, useCallback } from 'react'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { BiCalendar, BiTime } from "react-icons/bi";
import back from '../assets/left-arrow (2).png'
import gsg from '../assets/gsg.jpeg'
import flowbit from '../../node_modules/flowbite/dist/flowbite.min.js'
import Swal from "sweetalert2";
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import _ from 'lodash';


function DatePicker1(props) {
  /** @preserve
   *
   *  Please Note:
   *  ------------
   *  We are using styled-jsx here to assign tailwind classes to elements that are not exposed
   *  for styling by the underlying react-datepicker library. You can use the same approach or
   *  any other tool of you choice to achieve this. Example could be a combination of
   *  styled-components with twin.macro or even a custom scss stylesheet.
   */
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  return (
    <div>
      <style jsx global>{`
        /* Creating some classes and mixins to reuse */

        .primary-background-color {
          @apply bg-white;
        }
        .active-bg-color {
          @apply !bg-yellow-200;
        }
        .close-bg-color {
          @apply bg-red-400;
        }
        .active-text-color {
          @apply !text-red-400;
        }
        .primary-border-color {
          @apply border-red-400;
        }
        .primary-border-top-color {
          @apply !border-t-red-400;
        }
        .primary-border-bottom-color {
          @apply !border-b-red-400;
        }
        .border-based-arrow-color {
          @apply border-gray-700;
        }
        .item-hover-color {
          @apply !bg-gray-100;
        }
        .text-primary {
          @apply text-gray-700;
        }
        .text-light {
          @apply !text-gray-500;
        }
        .text-disabled {
          @apply !text-gray-300;
        }
        .scrollbar-base-color {
          @apply bg-yellow-100;
        }
        .scrollbar-thumb-color {
          @apply bg-yellow-300;
        }

        @mixin highlighted-item {
          & {
            @apply active-bg-color active-text-color;
            &:hover {
              @apply active-bg-color;
            }
          }
        }

        @mixin styled-scrollbar {
          &::-webkit-scrollbar-track {
            @apply scrollbar-base-color;
          }

          &::-webkit-scrollbar {
            @apply w-1 h-1 scrollbar-base-color;
          }

          &::-webkit-scrollbar-thumb {
            @apply scrollbar-thumb-color;
          }
        }

        @mixin option-arrow-base {
          & {
            content: "";
            @apply absolute block border-t border-r border-based-arrow-color h-2 w-2 left-1/2 -translate-x-1/2;
          }
        }

        .react-datepicker {
          @apply border primary-border-color rounded-md !p-2;
          &__navigation {
            *::before {
              @apply !border-t !border-r border-based-arrow-color;
            }
            &:hover *::before {
              @apply primary-border-color;
            }

            &--previous {
              @apply left-[0.625rem];
            }
            &--next {
              @apply right-[0.625rem];
            }
            &--next--with-time:not(&--next--with-today-button) {
              @apply left-[13.5rem];
            }
          }

          &__triangle::before {
            @apply h-[3px] border-[5px] !important;
          }

          &__triangle::after {
            @apply border-b-white h-[3px] border-[5px] !important;
          }

          &-popper[data-placement^="top"] {
            .react-datepicker__triangle::before {
              @apply primary-border-top-color primary-background-color !important;
            }
          }

          &-popper[data-placement^="bottom"] {
            .react-datepicker__triangle::before {
              @apply primary-border-bottom-color primary-background-color !important;
            }
          }

          &__header {
            @apply primary-background-color border-b-0;
          }

          &__current-month,
          &-year-header,
          &-time__header {
            @apply !text-xs !font-extralight text-light -mt-1 pb-1;
          }

          &__day {
            &-name {
              @apply text-light;
            }

            &:hover {
              @apply item-hover-color;
            }
          }

          &__year,
          &__quarter,
          &__month,
          &__day {
            @apply text-primary rounded-md;

            &--selected,
            &--keyboard-selected,
            &-text--selected,
            &-text--keyboard-selected,
            &--in-range,
            &--in-selecting-range {
              @include highlighted-item;
            }

            &--disabled,
            &--excluded {
              @apply text-disabled cursor-not-allowed;
            }
          }

          &__year,
          &__quarter,
          &__month {
            @apply py-[0.1rem];
            &-text {
              @apply py-[0.1rem] px-[0.1rem] !w-[4.5rem];
            }
          }

          &__time {
            &-container {
              @apply border-l-0 w-24;
            }

            &-list {
              @apply space-y-1;
              &-item {
                @apply flex rounded-md justify-center items-center text-xs mx-1;

                &:hover {
                  @apply item-hover-color;
                }

                &--selected {
                  @include highlighted-item;
                }

                &--disabled,
                &--excluded {
                  @apply text-disabled cursor-not-allowed !important;
                }
              }

              @include styled-scrollbar;
            }
          }

          &__close-icon {
            @apply pr-9;
            &::after {
              @apply close-bg-color font-extrabold;
            }
          }

          &__year,
          &__month,
          &__month-year {
            &-dropdown {
              @apply primary-background-color primary-border-color w-2/3 py-2;
              @include styled-scrollbar;

              &-container {
                @apply text-xs font-extralight text-light;
              }

              .react-datepicker__year-option {
                &:first-child {
                  a {
                    @apply h-4;
                    &::before {
                      @include option-arrow-base;
                      @apply top-1/2 translate-y-1/2 -rotate-45;
                    }
                  }
                }
                &:last-child {
                  a {
                    @apply h-4;
                    &::after {
                      @include option-arrow-base;
                      @apply -translate-y-1/2 rotate-[135deg];
                    }
                  }
                }
              }
            }

            &-read-view {
              &--down-arrow {
                @apply !border-t !border-r border-based-arrow-color h-[0.375rem] w-[0.375rem] mt-[0.188rem];
              }
              &:hover &--down-arrow {
                @apply primary-border-color;
              }
            }

            &-option,
            &-option--selected_month-year {
              @apply py-1;
            }
            &-option {
              &--selected {
                @apply active-text-color;
              }

              &:hover {
                @apply item-hover-color;
              }
            }
          }

          &__input-time-container {
            @apply flex items-center justify-between pr-6 text-primary;
            input {
              @apply outline-none;
            }
          }
        }
      `}</style>
      <DatePicker
        {...props}
        popperModifiers={[
          {
            name: "arrow",
            options: {
              padding: {
                left: 24,
                right: 24,
              },
            },
          },
          ...(props.popperModifiers ?? []),
        ]}
      />
    </div>
  );
}

function InputGroup6({
  label,
  name,
  value,
  onChange,
  type = "text",
  decoration,
  inputClassName = "",
  decorationClassName = "",
  disabled,
}) {
  return (
    <div className="flex flex-row items-stretch w-full">
      <input
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        type={type}
        placeholder={label}
        aria-label={label}
        className={`peer block w-full p-3 text-gray-600 bg-gray-100 border border-r-0 focus:border-red-400 focus:bg-white focus:outline-none focus:ring-0 appearance-none rounded-tr-none rounded-br-none rounded transition-colors duration-300 ${
          disabled ? "bg-gray-200" : ""
        } ${inputClassName}`}
        disabled={disabled}
      />
      <div
        className={`flex items-center rounded-tl-none rounded-bl-none rounded pr-3 py-3 text-gray-600 bg-gray-100 border border-l-0 peer-focus:border-red-400 peer-focus:bg-white transition-colors duration-300 ${
          disabled ? "bg-gray-200" : ""
        } ${decorationClassName}`}
      >
        {decoration}
      </div>
    </div>
  );
}

const CustomInputField = forwardRef(
  (
    {
      name,
      value,
      label,
      onClick,
      disabled,
      inputClassName,
      icon = <BiCalendar size="1rem" />,
    },
    ref
  ) => (
    <button className="w-full " onClick={onClick} ref={ref} disabled={disabled}>
      <InputGroup6
        name={name}
        value={value}
        onChange={() => null}
        label={label}
        decoration={icon}
        disabled={disabled}
        inputClassName={inputClassName}
      />
    </button>
  )
);

function DatepickerPresentationGroup({ caption, children }) {
  return (
    <div className="space-y-2">
      <div className="font-semibold text-sm text-gray-700">{caption}</div>
      {children}
    </div>
  );
}


export default function Details() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [startDate, setStartDate] = useState(new Date());
  const [startTime, setStartTime] = useState(new Date());
  const [endTime, setEndTime] = useState(new Date());
  const [modal, setModal] = useState(false);
  const [user, setUserData] = useState({});
  const [namaTempat, setNamaTempat] = useState('');
  const [deskripsiTempat, setDeskripsiempat] = useState('');
  const [fasilitasTempat, setFasilitasTempat] = useState('');
  const [kapasitasTempat, setKapasitasTempat] = useState('');

  React.useEffect(() => {
    if (_.isEmpty(localStorage.getItem('user'))) {
      navigate('/');
    }

    const user = JSON.parse(localStorage.getItem('user'));
    setUserData(user);

    axios.get(`http://localhost:8080/place/view/${id}`)
    .then((res) => {
      console.log(res.data);
      setNamaTempat(res.data.data.nama);
      setDeskripsiempat(res.data.data.deskripsi);
      setFasilitasTempat(res.data.data.fasilitas);
      setKapasitasTempat(res.data.data.kapasitas);
      console.log(namaTempat, deskripsiTempat, fasilitasTempat, kapasitasTempat);
    })
    .catch((error) => {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: error.message,
      });
      navigate('/homepage');
    });
  }, []);

  const handleStartTimeChange = useCallback(
    (start) => {
      setStartTime(start);
      console.log(start.toLocaleTimeString());
      console.log(start)
    },
    [setStartTime]
  );

  const handleEndTimeChange = useCallback(
    (end) => {
      setEndTime(end);
      console.log(end.toLocaleTimeString());
    },
    [setEndTime]
  );

  const handleDateChange = useCallback(
    (start) => {
      start.setHours(0);
      start.setMinutes(0);
      start.setSeconds(0);
      start.setMilliseconds(0);
      setStartDate(start);
      console.log(start);
    },
    [setStartDate]
  );

  // return Swal.fire({
  //   heightAuto: false,
  //   icon: "success",
  //   title: "Berhasil",
  //   text: "Schedule available",
  //   confirmButtonColor: "#8B5CF6",
  //   confirmButtonText: "Ok",
  // }).then((res) => {
  //   if (res.isConfirmed) window.location.href = "/homepage";
  // });
  const submitHandler = (e) => {
    e.preventDefault();
    axios.get('http://localhost:8080/schedule/availability', {
      namaTempat: namaTempat,
      tanggal: startDate,
      waktuAwal: startTime,
      waktuAkhir: endTime
    }).then((res) => {  
      console.log(res);
      if (res.status == '200') {
        console.log('masuk call submit intinya  ')
        axios.post('http://localhost:8080/schedule/input', {
          tanggal: startDate,
          waktuAwal: startTime,
          waktuAkhir: endTime,
          fullname: user.data.userData.fullname,
          namaTempat: namaTempat,
          org: user.data.userData.org
        })
        .then(() => {
          return Swal.fire({
            heightAuto: false,
            icon: "success",
            title: "Berhasil",
            text: "Peminjaman Berhasil!",
            confirmButtonColor: "#8B5CF6",
            confirmButtonText: "Ok",
          })
          .then((res) => {
            if (res.isConfirmed) window.location.href = "/homepage";
          })
        })
        .catch((err) => {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: err.message,
          })
        })
      }
    }).catch((error) => {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: error.message,
      })
    });
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
                { modal && 
                <div class="bg-red-100 border mt-[1rem] mr-[20rem] border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
                  <strong class="font-bold">PERHATIAN! </strong>
                  <span class="block sm:inline"> Jadwal sudah terisi!</span>
                  <span class="absolute top-0 bottom-0 right-0 px-4 py-3">
                    <svg class="fill-current h-6 w-6 text-red-500" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><title>Close</title><path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"/></svg>
                  </span>
                </div>
                }
                
            </div>
            <div class="text-6xl font-bold rounded-lg text-center">
                <p>{ namaTempat }</p>
            </div>
          </div>
          <div className='grid grid-cols-3'>
            <div>
              <h1 class="text-center">
                <span class="text-black-500 font-bold">Pilih jadwal</span>
              </h1>
              <DatepickerPresentationGroup caption="Tanggal">
                <DatePicker1
                  selected={startDate}
                  onChange={handleDateChange}
                  customInput={<CustomInputField name="name" label="Select date" />}
                  startDate={startDate}
                  popperPlacement="bottom"
                />
              </DatepickerPresentationGroup>
                <DatepickerPresentationGroup caption="Jam Mulai">
                  <DatePicker1
                    selected={startTime}
                    onChange={handleStartTimeChange}
                    customInput={<CustomInputField name="name" label="Select time" />}
                    startDate={startDate}
                    popperPlacement="bottom"
                    showTimeSelect
                    showTimeSelectOnly
                    dateFormat="h:mm aa"
                  />
              </DatepickerPresentationGroup>
                <DatepickerPresentationGroup caption="Jam akhir">
                  <DatePicker1
                    selected={endTime}
                    onChange={handleEndTimeChange}
                    customInput={<CustomInputField name="name" label="Select time" />}
                    startDate={startDate}
                    popperPlacement="bottom"
                    showTimeSelect
                    showTimeSelectOnly
                    dateFormat="h:mm aa"
                  />
              </DatepickerPresentationGroup>
              <form onSubmit={submitHandler}>
                <button
                type="submit"
                className="bg-green-500 w-full mt-[3rem] hover:bg-green-900 text-white font-bold py-2 px-4 rounded" >
                Submit
              </button>
              </form>
            </div>
            <div>
              <h1 class="text-center">
                <span class="text-black-500 font-bold"></span>
              </h1>
              <div className="flex h-screen">
                <div>
                </div>
              </div>
            </div>
            <div className='space-y-4'>
                <div>
                    <p>Deskripsi</p>
                </div>
                <div>
                    { deskripsiTempat } 
                </div>
                <div>
                    Fasilitas : { fasilitasTempat }
                </div>
                <div>
                    Kapasitas ~{ kapasitasTempat } orang
                </div>
            </div>
          </div>
        </div>

      </div>
    </div>
    
  )
}
