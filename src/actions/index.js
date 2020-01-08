import tranformForestcastService from "../services/transformForecastService";

export const SET_CITY = 'SET_CITY';
export const SET_FORECAST_DATA = 'SET_FORECAST_DATA';

const setCity = value => ({ type: SET_CITY, value});
const setForecastData = payload => ({type: SET_FORECAST_DATA, payload});

const api_key = "9fc91d474fa5a26c776d69aacff23360";
const url = "http://api.openweathermap.org/data/2.5/forecast";

export const setSelectedCity = payload => {
    return dispatch => {
        const url_forecast = `${url}?q=${ payload }&appid=${api_key}`;

        // activar en el estado un indicador de busqueda de datos
        dispatch(setCity(payload));
        return fetch(url_forecast).then(
            data => (data.json())
        ).then(
            weather_data => {                
                const forecastData = tranformForestcastService(weather_data);
                console.log(forecastData);

                // modificar el estado con el resultado de la prommise (fetch)
                dispatch(setForecastData({city: payload, forecastData}));
            }
        );
    };
};
