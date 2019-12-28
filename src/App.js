import React, { Component } from "react";
import { connect } from 'react-redux';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import "./App.css";
import { Grid ,Col, Row } from 'react-flexbox-grid';
import LocationList from "./components/LocationList";
import ForecastExtended from "./components/ForecastExtended";
import { MuiThemeProvider } from "@material-ui/core";
import { setCity } from './actions';



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
            this.props.setCity(city);
        }

        render() {
            const { city } = this.state
            return (
                <MuiThemeProvider>
                    <Grid>
                        <Row>
                            <Col xs={12}>
                            <AppBar position="static">
                                <Toolbar>
                                <IconButton edge="start" color="inherit" aria-label="menu">
                                    <MenuIcon />
                                </IconButton>
                                    <Typography variant="h6">
                                    Weather App
                                    </Typography>                                   
                                </Toolbar>
                                </AppBar>                                
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

const mapDispatchToPropsActions = dispatch => ({
    setCity: value => dispatch(setCity(value))
});
const AppConnected = connect(null, mapDispatchToPropsActions)(App);

export default AppConnected;