import React, { Component } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import { PropTypes } from 'prop-types';
import Location from './Location';
import WeatherData from './WeatherData';
import transformWeather from './../../services/transformWeather';
import './styles.css';
import getUrlWeatherbyCity from '../../services/getUrlWeatherByCity';



class WeatherLocation extends Component {

    constructor(props) {
        super(props);
        const { city } = props;
        this.state = {
            city,
            data: null
        };
        // console.log("constructor");
    }
    componentDidMount() {
        console.log("componentDIMount");
        this.handleUpdateClick();
    }


    handleUpdateClick = () => {
        const api_weather = getUrlWeatherbyCity(this.state.city);
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
                { data ? 
                    <WeatherData data={ data }></WeatherData> :                    
                    <CircularProgress size={50}></CircularProgress>
                }               
            </div>

        );
    }
};

WeatherLocation.protoTypes = {
    city: PropTypes.string.isRequired ,
}

export default WeatherLocation;
