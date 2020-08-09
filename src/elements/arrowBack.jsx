import arrow from '../img/left-arrow.png';
import styles from '../styles/sidebar.module.css'
import React from 'react';
import { connect } from 'react-redux';

const arrowBack = (props) => {
    const goBack = () => {
        props.nextPage()
    }

    return (
        <img src={arrow} onClick={goBack} className={styles.arrowBack}></img>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        nextPage: () => { dispatch({ type: 'DECREMENT' }) }
    }
}

export default connect(null, mapDispatchToProps)(arrowBack);

