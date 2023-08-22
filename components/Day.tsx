'use client'
import { getForecastWeather } from '@/services/api'
import { ResponseAPI, WeatherInterface } from '@/types'
import dayjs from 'dayjs'
import Image from 'next/image'
import React, { useEffect,useState } from 'react'
import WeatherComponent from './Weather'

interface dataInterface {
    weather:WeatherInterface
}
export default function  DayComponent(data:dataInterface) {
       
         return   <div className='flex flex-wrap items-center justify-center '>
                        {data.weather.forecast.forecastday.map((item)=>{
                            
                            return <div key={item.date}>
                                    <p>{item.date}</p>
                                {item.hour.map((hour)=>{

                                    return <div key={hour.time_epoch}>
                                        <WeatherComponent weather={hour} />
                                    </div>
                                })}
                            </div>
                        })}
            </div>
       
    
     
}
