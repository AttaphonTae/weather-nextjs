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
import { IoSearchCircleOutline } from 'react-icons/io5'
require('dayjs/locale/th')
// import 'dayjs/locale/de' // ES 2015 
dayjs.locale('th') // use locale globally
dayjs().locale('th').format() // use locale in a specific instance

export default function Home() {
  const [weather,setWeather] = useState<WeatherInterface | null>(null)
  const [searchText,setSearchText] = useState('')

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

  const {city,weatherInfo,setCity} = useCitiesStore()
  //callAPI()
  useEffect(()=>{
    callAPI(city)
  },[city])
 
  return (
    <main className="flex flex-col flex-wrap items-center justify-center bg-slate-600 text-white">
      <h1 className='font-medium text-2xl mt-12'>Weather Forecast!</h1>
      <div className='flex space-x-2 items-center mt-6 '>
        <input onChange={e=> setSearchText(e.target.value)} className='rounded-full text-slate-800 h-8 px-2 focus:border focus:border-slate-400' placeholder='city name...' />
        <button 
          onClick={()=>{
              setCity(searchText)
          }}
        className='w-10 h-10 rounded-full bg-slate-800 text-white flex items-center justify-center
                          hover:bg-white hover:text-slate-800 transition'>
          <IoSearchCircleOutline size={36} />
        </button>
      </div>
     
      <div className='w-full flex justify-center space-x-2 px-12 my-6'>
      {(city !== 'bankok' && city !== 'chiang mai' && city !== 'phuket') &&
        <CardComponent city={city} />
      }
            <CardComponent city={'bankok'} />
            <CardComponent city={'chiang mai'} />
            <CardComponent city={'phuket'} />

      </div>
        <p>{city}</p>
        <div className='w-full my-12'>
          {weather && <DayComponent weather={weather} />}
        
        </div>
      
    </main>
  )
}
