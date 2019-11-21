import React from "react";
import "./App.css";
import LocationList from "./components/LocationList";


const cities = [
    'Buenos Aires,ar',
    'Washington,us',
    'London, GB',
    'Cuenca,ec',
    'Madrid,es',
    'Lima,pe'
];
function App() {
    return ( 
        <div className = "App">
            <LocationList cities={cities}></LocationList>
        </div> 
    );
}
export default App;