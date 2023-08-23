'use client'
import Image from 'next/image'
import axios from 'axios'
import { getForecastWeather } from '@/services/api'
import { useEffect, useState } from 'react'
import { ResponseAPI, WeatherInterface } from '@/types'
import dayjs from 'dayjs'
import useCitiesStore from '@/zustand/cities'
import DayComponent from '@/components/Day'
import CardComponent from '@/components/Card'
require('dayjs/locale/th')
// import 'dayjs/locale/de' // ES 2015 
dayjs.locale('th') // use locale globally
dayjs().locale('th').format() // use locale in a specific instance

export default function Home() {
  const [weather,setWeather] = useState<WeatherInterface | null>(null)
  const callAPI = async (city:string) => {
      try {
        const response:ResponseAPI = await getForecastWeather({
          city:city
        })
        const weatherInterface = response.data as WeatherInterface
  
        setWeather(weatherInterface)
      } catch (error) {
        console.log(error)
      }
    
  }

  const {city,weatherInfo} = useCitiesStore()
  //callAPI()
  useEffect(()=>{
    console.log(weatherInfo)
  },[weatherInfo])
 
  return (
    <main className="flex flex-col flex-wrap items-center justify-center bg-slate-600 text-white">
      <h1 className='font-medium text-2xl my-12'>Weather Forecast!</h1>
      <div className='w-full flex justify-center space-x-2 px-12 my-6'>
          
      <CardComponent city={'bankok'} />
      <CardComponent city={'chiang mai'} />
      <CardComponent city={'phuket'} />

      </div>
        <p>{city}</p>
        <div className='w-full my-12'>
          {weatherInfo && <DayComponent weather={weatherInfo} />}
        
        </div>
      
    </main>
  )
}
