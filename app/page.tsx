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

  const {city} = useCitiesStore()
  //callAPI()
  useEffect(()=>{
    if(city) callAPI(city)
  },[city])
 
  return (
    <main className="flex flex-col flex-wrap items-center justify-center bg-slate-600 text-white">
      <h1 className='font-medium text-2xl mt-12'>Weather Forecast!</h1>

      <h1 className='font-medium text-xl text-center'>{weather?.location.name}</h1>
      <div className='w-full px-12'>
          <CardComponent />

      </div>
      {
        weather && 
        <div className='w-full mt-12'>
          {weather && <DayComponent weather={weather} />}
        
        </div>
      }
    </main>
  )
}
