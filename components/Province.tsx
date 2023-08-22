'use client'
import { getForecastWeather } from '@/services/api'
import { ResponseAPI, WeatherInterface } from '@/types'
import Image from 'next/image'
import React, { useEffect,useState } from 'react'
interface ProvinceInterface {
    title:string
}
export default function  ProvinceComponent(data:ProvinceInterface) {
    const [weather,setWeather] = useState<WeatherInterface | null>(null)

    const callAPI = async () => {
        const response = await getForecastWeather({city:data.title})
        const weatherInterface = response.data as WeatherInterface

        setWeather(weatherInterface)
    }
    useEffect(()=>{
        callAPI()
    },[])
   
         return   <div className='flex flex-col items-center justify-center '>
                        <div className={`w-10 h-10 bg-white rounded m-1 hover:w-16 hover:h-16 transition-all flex items-center justify-center`}>
                            { weather?.current?.condition.icon &&<Image alt='icons' src={'https:'+weather?.current?.condition.icon    } width={30} height ={30} />}
                        </div>
                        <p className='text-[8px]'>{weather?.location?.region}</p>
            </div>
    
     
}
