'use client'
import { getForecastWeather } from '@/services/api'
import { ResponseAPI, WeatherInterface,HourlyForecast } from '@/types'
import dayjs from 'dayjs'
import Image from 'next/image'
import React, { useEffect,useState } from 'react'
import * as relativeTime from 'dayjs/plugin/relativeTime';
dayjs.extend(relativeTime)

interface dataInterface {
    weather:HourlyForecast
}

export default function  WeatherComponent(data:dataInterface) {
    function convertENGTH(text: string){
        if(text === 'Light rain shower') return 'ฝนตกเบาบาง'
        if(text === 'Moderate or heavy rain shower') return 'ฝนตกปานกลางหรือหนักมาก'
        if(text === 'Patchy rain possible') return 'อาจมีฝนตกเป็นหย่อมๆ'
        if(text === 'Partly cloudy') return 'มีเมฆบางส่วน'
        if(text === 'Sunny') return 'เเดดจ้า'
        if(text === 'Cloudy') return 'เมฆมาก'
        if(text === 'Clear') return 'ท้องฟ้าโล่ง'
        if(text === 'Overcast') return 'มืดครึ้ม'
        if(text === 'Mist') return 'หมอกปกคลุม'
        return text
    }
        if(data){
            const date:any = dayjs(data.weather.time)
            return   <div className='flex flex-wrap items-center justify-start px-2 rounded-full border border-slate-200 w-fit'>
                           <p className='font-semibold text-sm'> {date.fromNow()} {convertENGTH(data.weather.condition.text)}</p>
                    </div>
        }
        else return <></>
       
    
     
}
