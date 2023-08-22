import axios from "axios";
interface DataReciever {
    city: string;
}
export const getForecastWeather= async (data:DataReciever) => {

    const options = {
        method: 'GET',
        url: process.env.NEXT_PUBLIC_URL,
        params: {
          q: data.city,
          days: '3'
        },
        headers: {
          'X-RapidAPI-Key': process.env.NEXT_PUBLIC_API_KEY,
          'X-RapidAPI-Host': process.env.NEXT_PUBLIC_HOST
        }
      };
      console.log(options)
      try {
        const response = await axios.request(options);
        console.log(response.data);
        return {success:true,data:response.data,msg:''}
      } catch (error) {
        console.error(error);
        return {success:false,msg:'error',data:''}
      }
}