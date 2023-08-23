'use client'
import { getForecastWeather } from '@/services/api'
import { ResponseAPI, WeatherInterface,HourlyForecast } from '@/types'
import dayjs from 'dayjs'
import Image from 'next/image'
import React, { useEffect,useState } from 'react'
import { IoRainyOutline,IoCloudyOutline,IoPartlySunnyOutline,IoRainySharp } from "react-icons/io5";

interface DataInterface {
    code:Number,
}

export default function  IconWeather(data:DataInterface) {
    if(data.code === 1003)
        return <>
                
                    <IoCloudyOutline size={60} />
          
                
            </>
    if(data.code === 1063|| data.code === 1243 || data.code === 1195)//Patchy rain possible
        return <>
                <IoRainySharp size={60} />
         </>
  
    if(data.code === 1183 || data.code === 1189 || data.code === 1240)//Light rain  1240
    return <>
            <IoRainyOutline size={60} />
     </>
     if(data.code === 1009)//Overcast 1009
     return <>
             <IoPartlySunnyOutline size={60} />
      </>
   
    return <>
                <IoPartlySunnyOutline size={60} />
        </>
} 

