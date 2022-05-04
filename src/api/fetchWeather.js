import axios from "axios";

const URL = 'https://api.openweathermap.org/data/2.5/weather';
const API_KEY = '6b6b136ffbaa76d23ecac6b2e0322ffe';

export const fetchWeather = async (query) => {
    const { data } = await axios.get(URL, {
        params: {
            q: query,
            units: 'metric',
            APPID: API_KEY,
        }
    })
return data;
}