import React, { Component } from "react";
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import "./App.css";
import { Grid ,Col, Row } from 'react-flexbox-grid';
import ForecastExtended from "./components/ForecastExtended";
import { MuiThemeProvider } from "@material-ui/core";
import LocationListCOntainer2 from "./containers/LocationListCOntainer2";
import ForecastExtendedContainer from "./containers/ForecastExtendedContainer";




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


        render() {
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
                                <LocationListCOntainer2
                                    cities={cities} 
                                   >
                                </LocationListCOntainer2>
                            </Col>
                            <Col xs={12} md={6}>
                                <Paper elevation={4}>
                                    
                                    <div className="details">
                                                                
                                        <ForecastExtendedContainer></ForecastExtendedContainer>                                                
                                        
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