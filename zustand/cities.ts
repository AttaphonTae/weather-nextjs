import { getForecastWeather } from '@/services/api'
import { ResponseAPI, WeatherInterface } from '@/types'
import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'


interface CityInterface {
  city: string,
  weatherInfo:WeatherInterface | null,
  setCity: (by: string) => void,
  setWeatherInfo: (by: WeatherInterface) => void
}

const useCitiesStore = create<CityInterface>()(
  devtools(
    persist(
      (set) => ({
        city: 'bankok',
        weatherInfo:null,
        setCity:async (city) => {
            set({ city })
           
        },
        setWeatherInfo: (weatherInfo) => set({ weatherInfo }),
      }),
      {
        name: 'city-storage',
      }
    )
  )
)
export default useCitiesStore