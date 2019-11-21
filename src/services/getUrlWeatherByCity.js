import { url, api_key } from './../constants/api_url';
const getUrlWeatherbyCity = city => {
    return `${url}?q=${city}&appid=${api_key}`;
}

export default getUrlWeatherbyCity;

// import { api_weather } from './../../constants/api_url';