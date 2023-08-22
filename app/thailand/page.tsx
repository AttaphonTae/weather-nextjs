'use client'
import ProvinceComponent from '@/components/Province'
import { getForecastWeather } from '@/services/api'
import React, { useState } from 'react'


interface SizeInterface {
    width:string,
    height:string,
}
export default function Page() {
  
  return (<div className='flex flex-wrap'>
       
        <div className='w-1/2 p-2'>
       
            <div className='flex items-center justify-end'>
                
                <ProvinceComponent title={'Mae Hong Son'} />
                <ProvinceComponent title={'Chiang Mai'} />
                <ProvinceComponent title={'Chiang Rai'} />
                <ProvinceComponent title={'Phayao'} />          
                
            
            </div>
            <div className='flex items-center justify-end'>
                        <ProvinceComponent title={'Lamphun'} />
                        <ProvinceComponent title={'Lampang'} />
                        <ProvinceComponent title={'Phrae'} /> 
                        
                <ProvinceComponent title={'Nan Thailand'} />        
            </div>
        </div>
        <div className='w-1/2'></div>
        <div className='w-1/2 p-2'>
                <div className='flex items-center justify-end'>
                    <ProvinceComponent title={'Uttaradit'} />
                    <ProvinceComponent title={'Tak'} />
                    <ProvinceComponent title={'Sukhothai'} />
                    <ProvinceComponent title={'Phitsanulok'} />
                     
                </div>
            

                <div className='flex items-center justify-end'>
                    <ProvinceComponent title={'Kamphaeng Phet'} />
                    <ProvinceComponent title={'Phichit'} />
                    <ProvinceComponent title={'Uthai Thani'} />
                    <ProvinceComponent title={'Nakhon Sawan'} />
                    <ProvinceComponent title={'Phetchabun'} />
                                 
                </div>
                
        </div>
        <div className='w-1/2 p-2'>
                <div className='flex items-center justify-start'>
                   

                    <ProvinceComponent title={'Loei'} />
                    <ProvinceComponent title={'Udon Thani'} />
                    <ProvinceComponent title={'Nong Bua Lam Phu'} />
                    <ProvinceComponent title={' Nong Khai'} />
                     
                </div>
                <div className='flex items-center justify-start'>
                    <ProvinceComponent title={'Sakon Nakhon'} />
                    <ProvinceComponent title={'Nakhon Phanom'} />
                    <ProvinceComponent title={'Mukdahan'} />
                    <ProvinceComponent title={'Kalasin'} />                    
                </div>

                <div className='flex items-center justify-start'>
                    
                    <ProvinceComponent title={'Maha Sarakham'} /> 
                    <ProvinceComponent title={'Khon Kaen'} /> 
                    
                    <ProvinceComponent title={'Chaiyaphum'} /> 
                    <ProvinceComponent title={'Roi Et'} />                       
                </div>

                <div className='flex items-center justify-start'>
                  
                    <ProvinceComponent title={'Nakhon Ratchasima'} />
                    <ProvinceComponent title={'Buri Ram'} /> 
                    <ProvinceComponent title={'Surin'} /> 
                    
                    <ProvinceComponent title={'Si Sa Ket'} />                       
                </div>
                <div className='flex items-center justify-start'>
                  
                    <ProvinceComponent title={'Ubon Ratchathani'} /> 
                  <ProvinceComponent title={'Amnat Charoen'} />
                  <ProvinceComponent title={'Yasothon'} /> 
                  <ProvinceComponent title={'Roi Et'} /> 
                                          
              </div>
              
        </div>
        <div className='w-1/2  -mt-28 p-2'>
                <div className='flex items-center justify-end'>
                   

                    <ProvinceComponent title={'Kanchanaburi'} />
                    <ProvinceComponent title={'Suphan Buri'} />
                    <ProvinceComponent title={'Ratchaburi'} />
                    <ProvinceComponent title={'Prachuap Khiri Khan'} />
                   
                </div>
                <div className='flex items-center justify-end'>
                   

                   <ProvinceComponent title={' Chai Nat'} />
                   <ProvinceComponent title={' Sing Buri'} />
                   <ProvinceComponent title={'Lop Buri'} />
                   <ProvinceComponent title={'Ang Thong'} />
                   
               </div>
               <div className='flex items-center justify-end'>
                   

                    <ProvinceComponent title={'Phra Nakhon Si Ayuttaya'} />

                    <ProvinceComponent title={'Saraburi'} />
                    <ProvinceComponent title={'Pathum Thani'} />
                    <ProvinceComponent title={'Nonthaburi'} />
               </div>
               <div className='flex items-center justify-end'>
                   

                    <ProvinceComponent title={'Bangkok'} />

                    <ProvinceComponent title={'Samut Prakan'} />
                    <ProvinceComponent title={'Samut Songkhram'} />
                    <ProvinceComponent title={'Samut Sakhon'} />
                    <ProvinceComponent title={'Nakhon Pathom'} />
               </div>
        </div>
        <div className='w-1/2 p-2'>
                <div className='flex items-center justify-start'>
                   

                    <ProvinceComponent title={'Nakhon Nayok'} />
                    <ProvinceComponent title={'Prachin Buri'} />
                    <ProvinceComponent title={'Sa Kaeo'} />
                    <ProvinceComponent title={'ChaChoengSao'} />
                   
                </div>
                <div className='flex items-center justify-start'>
                   

                   <ProvinceComponent title={'Chon Buri'} />
                   <ProvinceComponent title={'Rayong'} />
                   <ProvinceComponent title={'Chanthaburi'} />
                   <ProvinceComponent title={'Trat'} />
                   
               </div>
               
        </div>
       <div className='w-full'>
                <div className='flex flex-col w-1/2 items-end     justify-end'>
                   
                   <div className='flex'>
                        <ProvinceComponent title={'Chumphon'} />
                        <ProvinceComponent title={'Ranong'} />
                        <ProvinceComponent title={'Surat Thani'} />
                   </div>

                   <div className='flex'>
                        <ProvinceComponent title={'Phang Nga'} />
                        <ProvinceComponent title={'Phuket'} />
                        <ProvinceComponent title={'Krabi'} />
                   </div>

                   <div className='flex'>
                        <ProvinceComponent title={'Nakhon Si Thammarat'} />
                        <ProvinceComponent title={'Phatthalung'} />
                        <ProvinceComponent title={'Trang'} />
                   </div>
                   <div className='flex'>
                        <ProvinceComponent title={'Satun'} />
                        <ProvinceComponent title={'Song Khla'} />
                   </div>
                   <div className='flex'>
                        <ProvinceComponent title={'Pattani'} />
                        <ProvinceComponent title={'Yala'} />
                        <ProvinceComponent title={'Narathiwat'} />
                   </div>
               </div>
       </div>
     </div>
   
  )
}
