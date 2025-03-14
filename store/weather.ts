import {create} from "zustand"

type WeatherState = {
  city:string;
  weather:any;
  loading:boolean;
  error:string|null;
  setCity:(city:string)=>void;
  fetchWeather:(city:string)=> Promise<void>;
};

const weatherStore = create<WeatherState>((set) => ({
  city:'India',
  weather:null,
  loading:false,
  error:null,
  setCity: (city)=> set({city}),
  fetchWeather:async(city) => {
    set({loading:true,error:null});
    try{
      const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=12415e900011867aba28590ee61ff7a5`);
      const data = await res.json();
      set({ weather: data, loading: false });
    }
    catch(err) {
      set({ error: "Failed to fetch weather", loading: false });
    }
  }
}));

export default weatherStore;