'use client'
import { getForecastWeather } from '@/services/api'
import { ResponseAPI, WeatherInterface,HourlyForecast } from '@/types'
import dayjs from 'dayjs'
import Image from 'next/image'
import React, { useEffect,useState } from 'react'
import * as relativeTime from 'dayjs/plugin/relativeTime';
dayjs.extend(relativeTime)
import { IoLocationOutline,IoPaperPlaneOutline,IoPartlySunnyOutline } from "react-icons/io5";

interface dataInterface {
    weather:HourlyForecast
}

export default function  CardComponent() {
    return <div className='bg-opacity-25 w-60 pb-4 bg-white rounded-lg'>
                <div className='flex justify-between items-center pt-4 px-4 '>
                    <div className='p-2'><IoLocationOutline /></div>
                    <div className='p-2 font-medium'>กรุงเทพ</div>
                    <div className='p-2'><IoPaperPlaneOutline /></div>
                </div>
                <div className='flex items-center justify-center py-6'>
                    <IoPartlySunnyOutline size={60} />
                </div>
                <div className='flex flex-col items-center justify-center '>
                    <p className='text-3xl'>33</p>
                    <p className='text-xs'>celcius</p>
                </div>
                <div className='flex justify-between'>
                    <div className='flex flex-col items-center justify-center w-1/2 '>
                        <p className='text-3xl'>22</p>
                        <p className='text-xs'>km/h</p>
                    </div>
                    <div className='flex flex-col items-center justify-center w-1/2 '>
                    <p className='text-3xl'>10</p>
                    <p className='text-xs'>in</p>
                </div>
                </div>
                <div className='px-6 mt-6 mx-auto'>
                    <div className='flex justify-between items-center'>
                        <p className='font-bold text-xs w-1/2'>TODAY</p>
                        <p className='font-bold text-xs w-1/2 text-right'>Cloundy</p>
                    </div>
                    <div className='flex justify-between items-center'>
                        <p className='font-bold text-xs w-1/2'>THURSDAY</p>
                        <p className='font-bold text-xs w-1/2 text-right'>Sunny</p>
                    </div>
                    <div className='flex justify-between items-center'>
                        <p className='font-bold text-xs w-1/2'>FRIDAY</p>
                        <p className='font-bold text-xs w-1/2 text-right'>Cloundy</p>
                    </div>
                </div>
                <p className='text-center  mt-4 italic text-xs'> ทำนาย </p>
                <div className='flex w-full justify-center'>
                    <div className='bg-slate-800 rounded-full rounded-tr rounded-br'>
                            <p className='text-white font-bold text-xs px-2 py-1'>3 days</p>
                    </div>
                    <div className='bg-slate-800 '>
                            <p className='text-white font-bold text-xs px-2 py-1'>7 days</p>
                    </div>
                    <div className='bg-slate-800 rounded-full rounded-tl rounded-bl'>
                            <p className='text-white font-bold text-xs px-2 py-1'>month</p>
                    </div>
                </div>
            </div>
     
}
