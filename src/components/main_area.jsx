import React, { Component } from 'react'

import styles from '../styles/mainArea.module.css';

import bmw3_blue_basic_wheels from '../img/bmw_with_basic_wheels/bmw3_blue.png';
import bmw3_black_basic_wheels from '../img/bmw_with_basic_wheels/bmw3_black.png';
import bmw3_white_basic_wheels from '../img/bmw_with_basic_wheels/bmw3_white.png';
import bmw3_orange_basic_wheels from '../img/bmw_with_basic_wheels/bmw3_orange.png';

import bmw3_white_premium_wheels from '../img/bmw_with_premium_wheels/bmw3_white_premium_wheels.png';
import bmw3_black_premium_wheels from '../img/bmw_with_premium_wheels/bmw3_black_premium_wheels.png';
import bmw3_blue_premium_wheels from '../img/bmw_with_premium_wheels/bmw3_blue_premium_wheels.png';
import bmw3_orange_premium_wheels from '../img/bmw_with_premium_wheels/bmw3_orange_premium_wheels.png';

import blackBlackInterior from '../img/interior/blackBlackInterior.png';
import blackSilverInterior from '../img/interior/blackSilverInterior.png';
import lightBlackInterior from '../img/interior/lightBlackInterior.png';
import lightSilverInterior from '../img/interior/lightSilverInterior.png';


import { connect } from 'react-redux';

export class main_area extends Component {

    switchToInterior = () => {
        this.props.setShowInterior()
    }
    switchToExterior = () => {
        this.props.setShowExterior()
    }

    changeConfig = () => {
        //EXTERIOR + STANDARD WHEELS
        if (this.props.extColor === 'white' && this.props.wheels === 'standardWheels') {
            return bmw3_white_basic_wheels;
        }
        else if (this.props.extColor === 'black' && this.props.wheels === 'standardWheels') {
            return bmw3_black_basic_wheels;
        }
        else if (this.props.extColor === 'orange' && this.props.wheels === 'standardWheels') {
            return bmw3_orange_basic_wheels;
        }
        else if (this.props.extColor === 'blue' && this.props.wheels === 'standardWheels') {
            return bmw3_blue_basic_wheels;
        }
        //EXTERIOR + PREMIUM WHEELS
        if (this.props.extColor === 'white' && this.props.wheels === 'premiumWheels') {
            return bmw3_white_premium_wheels;
        }
        else if (this.props.extColor === 'black' && this.props.wheels === 'premiumWheels') {
            return bmw3_black_premium_wheels;
        }
        else if (this.props.extColor === 'orange' && this.props.wheels === 'premiumWheels') {
            return bmw3_orange_premium_wheels;
        }
        else if (this.props.extColor === 'blue' && this.props.wheels === 'premiumWheels') {
            return bmw3_blue_premium_wheels;
        }
        //INTERIOR

    }
    changeInteriorConfig = () => {
        if (this.props.interiorColor === 0 && this.props.trimColor === 0) {
            return blackSilverInterior;
        }
        else if (this.props.interiorColor === 1 && this.props.trimColor === 0) {
            return lightSilverInterior
        }
        else if (this.props.interiorColor === 0 && this.props.trimColor === 1) {
            return blackBlackInterior
        }
        else if (this.props.interiorColor === 1 && this.props.trimColor === 1) {
            return lightBlackInterior
        }

    }


    render() {
        if (this.props.showInterior === false) {
            return (
                <div className={styles.mainArea} style={{ backgroundImage: `url(${this.changeConfig()})` }}>
                    <div>
                        <button onClick={this.switchToExterior} className={styles.activeButton}>Exterior</button>
                        <button onClick={this.switchToInterior}>Interior</button>

                    </div>
                </div>
            )
        }
        else if (this.props.showInterior === true) {
            return (
                <div className={styles.mainArea} style={{ backgroundImage: `url(${this.changeInteriorConfig()})` }}>
                    <div>
                        <button onClick={this.switchToExterior}>Exterior</button>
                        <button onClick={this.switchToInterior} className={styles.activeButton}>Interior</button>
                    </div>
                </div>
            )
        }


    }
}


const mapStateToProps = (state) => {

    return {
        extColor: state.extColorReducer.color,
        wheels: state.wheelsReducer.name,
        showInterior: state.showInteriorReducer,
        interiorColor: state.interiorColorReducer.id,
        trimColor: state.trimColorReducer.id
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setShowInterior: () => { dispatch({ type: 'SHOW_INTERIOR_TRUE' }) },
        setShowExterior: () => { dispatch({ type: 'SHOW_INTERIOR_FALSE' }) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(main_area);
