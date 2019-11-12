import React, { Component } from 'react';
import Location from './Location';
import WeatherData from './WeatherData';
import transformWeather from './../../services/transformWeather';
import './styles.css';
import { api_weather } from './../../constants/api_url';
import {
    SUN,

} from './../../constants/weathers';

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
            city: 'Cuencas',
            data: data
        };
        // console.log("constructor");
    }

    // componentDidMount() {
    //     console.log("componentDidMount");
    // }

    // componentDidUpdate(prevProps, prevState) {
    //     console.log("componentDidUpdate");
    // }
    // componentWillMount() {
    //     console.log("UNSAFE componentWillMount");
    // }
    

    // componentWillUpdate(nextProps, nextState) {
    //     console.log("UNSAFE componentWillUpdate");
    // }



    handleUpdateClick = () => {
        fetch(api_weather).then( resolve => {
            // console.log(resolve.json());
            return resolve.json();

        }).then( data => {
            const newWeather = transformWeather(data);
            console.log(newWeather);
            this.setState({
                data: newWeather
            });
        } );
       
    }
    render () {
        console.log("render");
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
