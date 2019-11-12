import React, { Component } from 'react';
import convert  from 'convert-units';
import Location from './Location';
import WeatherData from './WeatherData';
import './styles.css';
import {
    CLOUD,
    CLOUDY,
    SUN,
    WINDY,
    RAIN,
    SNOW,
} from './../../constants/weathers';

const location = "Buenos Aires,ar";
const api_key = "9fc91d474fa5a26c776d69aacff23360";
const url = "http://api.openweathermap.org/data/2.5/weather";

const api_weather = `${url}?q=${location}&appid=${api_key}`;

const data = {
    temperature: 5,  
    weatherState: SUN,
    humidity: 10,
    wind: '10 m/s',
}


class WeatherLocation extends Component {

    constructor() {
        super();
        this.state = {
            city: 'Buenos Aires',
            data: data
        };
    }

    getTemp = (kelvin) => {
        return convert(kelvin).from('K').to('C').toFixed(2);
    }

    getWeatherState = (weather_data) => {
        return SUN;
    }

    getData = (weather_data) => {
        const { humidity, temp } = weather_data.main;
        const { speed } = weather_data.wind;
        const weatherState = this.getWeatherState(weather_data) ;
        const temperature = this.getTemp(temp);

        const data = {
            humidity,
            temperature,
            weatherState,
            wind: `${ speed } m/s`
        };

        return data;
    };

    handleUpdateClick = () => {
        fetch(api_weather).then( resolve => {
            // console.log(resolve.json());
            return resolve.json();

        }).then( data => {
            const   newWeather = this.getData(data);
            console.log(newWeather);
            this.setState({
                data: newWeather
            });
        } );
       
    }
    render () {
        const { city, data } = this.state;
        return(
            <div className="weatherLocationCont">  
                <Location city={ city }></Location>
                <WeatherData data={ data }></WeatherData>
                <button onClick={this.handleUpdateClick}>Actualizar</button>
            </div>

        );
    }
};

export default WeatherLocation;
