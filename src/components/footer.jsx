import React from 'react'

import styles from '../styles/footer.module.css';

import { connect } from 'react-redux';
const footer = (props) => {
    console.log(props)

    const handleClick = () => {
        props.nextPage()
    }

    //const dispatch = this.props.dispatch;
    return (

        < footer >
            <div className={styles.bottomBar}><p>Price: ${props.price}</p></div>
            {props.steps < 4 ?
                <button onClick={handleClick}>NEXT STEP</button>
                :
                <button onClick={handleClick}>BUY BMW</button>
            }
        </footer >
    )

}
const mapDispatchToProps = (dispatch) => {
    return {
        nextPage: () => { dispatch({ type: 'INCREMENT' }) }
    }
}

const mapStateToProps = (state) => {
    return {
        price: state.enginePriceReducer.price + state.modelPriceReducer.price + state.extColorReducer.price + state.wheelsReducer.price + state.interiorColorReducer.price + state.trimColorReducer.price,
        steps: state.stepCounterReducer
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(footer)
