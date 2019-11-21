import React from 'react';
import WeatherIcons from 'react-weathericons';
import PropTypes from 'prop-types';

import {
    CLOUD,
    SUN,
    RAIN,
    SNOW,
    THUNDER,
    DRIZZLE
} from '../../../constants/weathers';

import './styles.css';

const icons = {
    [SUN]: "day-sunny",
    [CLOUD]: "cloud",
    [THUNDER]: "day-thunderstore",
    [RAIN]: "rain",
    [SNOW]: "snow",
    [DRIZZLE]: "day-showers"
};
const getWeatherIcon = (weatherState) => {
    const sizeIcon = "4x";
    const icon = icons[weatherState];
    if ( icon  ) {
        return (  <WeatherIcons className="wicon" name={ icon } size={sizeIcon}></WeatherIcons> );
    } else {
        return (  <WeatherIcons className="wicon" name={ SUN } size={sizeIcon}></WeatherIcons> );
    }
};
const WeatherTemperature = ({ temperature, weatherState }) => (
    <div className="weatherTemperaturaCont">
        { getWeatherIcon(weatherState) }
        <span className="temperature">{`${temperature}`}</span>
        <span className="temperatureType">{` ºC`}</span>
    </div>
);

WeatherTemperature.propTypes = {
    temperature: PropTypes.number.isRequired,
    weatherState: PropTypes.string.isRequired,
};

export default WeatherTemperature;
