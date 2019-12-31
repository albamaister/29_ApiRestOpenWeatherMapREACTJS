import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setCity } from '../actions';
import LocationList from '../components/LocationList';

class LocationListCOntainer2 extends Component {
    handleSelectedLocation = city => {  
        console.log(city);        
        this.props.setCity(city);
    }

    render() {
        return (
            <LocationList
                cities={this.props.cities} 
                onSelectedLocation={this.handleSelectedLocation}>
            </LocationList>
        );
    }
}

LocationListCOntainer2.propTypes = {
    setCity: PropTypes.func.isRequired,
};

const mapDispatchToPropsActions = dispatch => ({
    setCity: value => dispatch(setCity(value))
});

export default connect(null, mapDispatchToPropsActions)(LocationListCOntainer2);;