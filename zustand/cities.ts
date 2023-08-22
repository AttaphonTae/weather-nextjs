import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'


interface CityInterface {
  city: string
  setCity: (by: string) => void
}
const useCitiesStore = create<CityInterface>()(
  devtools(
    persist(
      (set) => ({
        city: 'bankok',
        setCity: (city) => set({ city }),
      }),
      {
        name: 'city-storage',
      }
    )
  )
)
export default useCitiesStore