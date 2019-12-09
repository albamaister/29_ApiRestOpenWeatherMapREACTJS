import React, { Component } from "react";
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import "./App.css";
import { Grid ,Col, Row } from 'react-flexbox-grid';
import LocationList from "./components/LocationList";
import ForecastExtended from "./components/ForecastExtended";
import { MuiThemeProvider } from "@material-ui/core";



const cities = [
    'Buenos Aires,ar',
    'Washington,us',
    'London, GB',
    'Cuenca,ec',
    'Madrid,es',
    'Lima,pe'
];
// function App() {
    class App extends Component {

        constructor() {
            super();
            this.state = { city: null };
        }
        handleSelectedLocation = city => {
            this.setState({ city });
            console.log(`handleSelectedLocation ${city}`);
        }

        render() {
            const { city } = this.state
            return (
                <MuiThemeProvider>
                    <Grid>
                        <Row>
                            <Col xs={12}>
                                <AppBar title="Weather App"></AppBar>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={12} md={6}>
                                <LocationList
                                    cities={cities} 
                                    onSelectedLocation={this.handleSelectedLocation}>
                                </LocationList>
                            </Col>
                            <Col xs={12} md={6}>
                                <Paper elevation={4}>
                                    
                                    <div className="details">
                                        { 
                                            city && 
                                                <ForecastExtended city={city}></ForecastExtended>                                                
                                        }
                                    </div>
                                </Paper>
                            </Col>     
                        </Row>
                    </Grid>         
                </MuiThemeProvider> 
                );
}
}
export default App;