'use client'
import { getForecastWeather } from '@/services/api'
import { ResponseAPI, WeatherInterface,HourlyForecast } from '@/types'
import dayjs from 'dayjs'
import Image from 'next/image'
import React, { useEffect,useState } from 'react'
// import * as relativeTime from 'dayjs/plugin/relativeTime';
// dayjs.extend(relativeTime)
import { IoLocationOutline,IoPaperPlaneOutline,IoPartlySunnyOutline } from "react-icons/io5";
import IconWeather from './IconWeather'
import convertENGTH from '@/utils/to_thai'
import useCitiesStore from '@/zustand/cities'

interface DataInterface {
    city:string,
}

export default function  CardComponent(data:DataInterface) {
    const [weather,setWeather] = useState<WeatherInterface | null>(null)
    const {city,setWeatherInfo,setCity} = useCitiesStore()

    const callAPI = async () => {
        try {
          const response:ResponseAPI = await getForecastWeather({
            city:data.city
          })
          const weatherInterface = response.data as WeatherInterface
        //   setWeatherInfo(weatherInterface)
          setWeather(weatherInterface)
        } catch (error) {
          console.log(error)
        }
      
    }
    useEffect(()=>{
        callAPI()
    },[data.city])
    if(weather)
    return <div onClick={()=>{
        if(city !== data.city){
            setCity(data.city)
            
        }
    }} className={city === data.city? 'bg-black w-60 pb-4 rounded-lg flex flex-col justify-between' : 'cursor-pointer bg-opacity-25 w-60 pb-4 bg-white rounded-lg flex flex-col justify-between'}>
                <div className='flex justify-between items-center pt-4 px-4'>
                    <div className='p-2'><IoLocationOutline /></div>
                    <div className='p-2 font-medium'>{weather.location.name}</div>
                    <div className='p-2'><IoPaperPlaneOutline /></div>
                </div>
                <div className='flex items-center justify-center py-6 h-1/5'>
                    <IconWeather code = {weather.current.condition.code} />
                </div>
                <div className='flex flex-col items-center justify-center h-1/5'>
                    <p className='text-3xl'>{weather.current.feelslike_c}</p>
                    <p className='text-xs'>celcius</p>
                </div>
                <div className='flex justify-between h-1/5'>
                    <div className='flex flex-col items-center justify-center w-1/2 '>
                        <p className='text-3xl'>{weather.current.wind_kph}</p>
                        <p className='text-xs'>km/h</p>
                    </div>
                    <div className='flex flex-col items-center justify-center w-1/2 '>
                    <p className='text-3xl'>{weather.current.pressure_in}</p>
                    <p className='text-xs'>in</p>
                </div>
                </div>
                <div className=' mt-6 mx-auto w-full px-6 h-1/5'>
                    <div className='flex justify-between items-start '>
                        <p className='font-bold text-left text-xs w-1/2 '>วันนี้</p>
                        <p className='font-bold text-xs w-1/2 text-right'>{convertENGTH(weather.forecast.forecastday[0].day.condition.text)}</p>
                    </div>
                    <div className='flex justify-between items-start'>
                        <p className='font-bold text-xs w-1/2'>{dayjs(weather.forecast.forecastday[1].date).format('dddd')}</p>
                        <p className='font-bold text-xs w-1/2 text-right'>{convertENGTH(weather.forecast.forecastday[1].day.condition.text)}</p>
                    </div>
                    <div className='flex justify-between items-start'>
                    <p className='font-bold text-xs w-1/2'>{dayjs(weather.forecast.forecastday[2].date).format('dddd')}</p>
                        <p className='font-bold text-xs w-1/2 text-right'>{convertENGTH(weather.forecast.forecastday[2].day.condition.text)}</p>
                    </div>
                </div>
                <p className='text-center  mt-4 italic text-xs'> ทำนาย </p>
                <div id='lastrow' className='flex w-full justify-center items-end'>
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
