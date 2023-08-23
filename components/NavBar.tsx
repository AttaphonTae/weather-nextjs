'use client'
import { getForecastWeather } from '@/services/api'
import { ResponseAPI, WeatherInterface } from '@/types'
import useCitiesStore from '@/zustand/cities'
import Image from 'next/image'
import React, { useEffect,useState } from 'react'
interface NavigationBarInterface {
    title:string
}
export default function  NavBar(data:NavigationBarInterface) {
    const {city,setCity} = useCitiesStore()

    return   <div className='flex flex-row items-center justify-between bg-white'>
                        <div className='py-2 w-1/3'>
                            <h1 className='font-bold text-2xl px-12'>TH WEATHER</h1>
                        </div>
                        <div className='flex space-x-2 w-1/3 items-center justify-center'>
                            <div onClick={()=>{
                                
                            }} className='cursor-pointer rounded-full rounded-br border border-slate-200 drop-shadow bg-white
                                            transition hover:bg-slate-800 hover:text-white'>
                                <p className='font-semibold px-2 py-1 text-sm'>เหนือ</p>
                            </div>
                            <div onClick={()=>{
                              
                            }} className='cursor-pointer rounded-full rounded-br border border-slate-200 drop-shadow bg-white
                                           transition hover:bg-slate-800 hover:text-white'>
                                <p className='font-semibold px-2 py-1 text-sm'>กลาง</p>
                            </div>
                            <div onClick={()=>{
                             
                            }} className='cursor-pointer rounded-full rounded-br border border-slate-200 drop-shadow bg-white
                                            transition hover:bg-slate-800 hover:text-white'>
                                <p className='font-semibold px-2 py-1 text-sm'>ออก</p>
                            </div>
                            <div onClick={()=>{
                                
                            }} className='cursor-pointer rounded-full rounded-br border border-slate-200 drop-shadow bg-white
                                           transition hover:bg-slate-800 hover:text-white'>
                                <p className='font-semibold px-2 py-1 text-sm'>ตก</p>
                            </div>
                        </div>
                        <div className='w-1/3'></div>
            </div>
    
     
}
