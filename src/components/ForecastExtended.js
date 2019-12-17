import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ForecastItem from './ForecastItem';
import './styles.css';
import tranformForestcastService from '../services/transformForecastService';
export const api_key = "9fc91d474fa5a26c776d69aacff23360";
export const url = "http://api.openweathermap.org/data/2.5/forecast";


// const days = [
//     'Lunes',
//     'Martes',
//     'Miercoles',
//     'Jueves',
//     'Viernes',
// ];

// const data = {
//     temperature: 10,
//     humidity: 10,
//     weatherState: 'cloud',
//     wind: 'normal'
// }

class ForecastExtended extends Component {

    constructor() {
        super();
        this.state = { forecastData: null }
    }

    componentDidMount() {
       this.updateCity(this.props.city);
    }

    componentWillReceiveProps( nextProps ) {
        if ( nextProps.city !== this.props.city ) {
            this.setState({ forecastData: null });
            this.updateCity(nextProps.city);
        }
    }

    updateCity = city => {
        const url_forecast = `${url}?q=${ city }&appid=${api_key}`;

        fetch(url_forecast).then(
            data => (data.json())
        ).then(
            weather_data => {
                console.log(weather_data);
                const forecastData = tranformForestcastService(weather_data);
                console.log(forecastData);
                this.setState({ forecastData });
            }
        );
    }

    renderForecastItemDays(forecastData) {
        // return <h1> Render Items </h1>;
        return forecastData.map( forecast => (
            <ForecastItem 
                key={`${forecast.weekDay}${forecast.hour}`}
                weekDay={forecast.weekDay} 
                hour={forecast.hour} 
                data={forecast.data}>                    
            </ForecastItem>));        
    }

    renderProgress = () => {
        return <h3>Cargando pronostico extendido...</h3>;
    }

    render() {
        const { city } = this.props;
        const { forecastData } = this.state;
    return (<div>
                <h2 className='forecast-title'>Pronostico extendido para {city}</h2>  
                { forecastData ?
                    this.renderForecastItemDays(forecastData) :
                    this.renderProgress()
                
                }              
            </div>);
    }
}

ForecastExtended.propTypes = {
    city: PropTypes.string.isRequired,
}
export default ForecastExtended;