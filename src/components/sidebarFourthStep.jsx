import React from 'react';
import { connect } from 'react-redux';
import styles from '../styles/sidebar.module.css'

import lightLeather from '../img/interior/lightLeather.jpeg';
import blackLeather from '../img/interior/blackLeather.jpeg';
import silverTrim from '../img/interior/silverTrim.jpeg';
import blackTrim from '../img/interior/blackTrim.jpeg';

import dotActive from '../img/dot-active.png';
import dot from '../img/dot.png';

import interiorColorsList from '../interiorColorsList.json';
import trimColorsList from '../trimColorsList.json';

class sidebarThirdStep extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            interiorColorSelectedId: 0,
            interiorColor: [],
            trimColorSelectedId: 0,
            trimColor: [],


        }
    }
    componentDidMount() {
        const interiorColorsListVar = interiorColorsList;
        const trimColorsListVar = trimColorsList;
        this.setState({ interiorColor: interiorColorsListVar });
        this.setState({ trimColor: trimColorsListVar });
    }

    showExterior() {
        this.props.setShowExterior()
    }
    interiorColorHandleClick = (id, name, reducerId, price) => {
        this.props.setInteriorColor(id, name, reducerId, price)
        this.setState({ interiorColorSelectedId: id })
        this.props.setShowInterior()
    }
    trimColorHandleClick = (id, name, reducerId, price) => {
        this.props.setTrimColor(id, name, reducerId, price)
        this.setState({ trimColorSelectedId: id })
        this.props.setShowInterior()
    }


    render() {
        return (

            <div className={styles.sidebar}>
                <h2>Summary:</h2>
                <h4>BMW {this.props.engine.name} {this.props.model.name}</h4>
                <div className={styles.sum}>
                    <div>
                        <p> {this.props.engine.name}</p>
                        <p>$ {this.props.engine.price}</p>
                        <p>+ {this.props.model.name}</p>
                        <p>$ {this.props.model.price}</p>
                        <p>+ {this.props.paint.officialName}</p>
                        <p>$ {this.props.paint.price}</p>
                        <p>+ {this.props.wheels.officialName}</p>
                        <p>$ {this.props.wheels.price}</p>
                        <p>+ {this.props.interiorColor.name}</p>
                        <p>$ {this.props.interiorColor.price}</p>
                        <p>+ {this.props.trimColor.name}</p>
                        <p>$ {this.props.trimColor.price}</p>
                    </div>

                    <div className={styles.sumPrice}>
                        <p>Total:</p>
                        <p> ${this.props.engine.price + this.props.model.price + this.props.paint.price + this.props.wheels.price + this.props.interiorColor.price + this.props.trimColor.price}</p>
                    </div>
                </div>
            </div>
        )
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        setShowExterior: () => { dispatch({ type: 'SHOW_INTERIOR_FALSE' }) },
        setInteriorColor: (id, name, reducerId, price) => { dispatch({ type: reducerId, id: id, name: name, price: price }) },
        setTrimColor: (id, name, reducerId, price) => { dispatch({ type: reducerId, id: id, name: name, price: price }) }
    }
}
const mapStateToProps = (state) => {

    return {
        engine: state.enginePriceReducer,
        model: state.modelPriceReducer,
        paint: state.extColorReducer,
        wheels: state.wheelsReducer,
        interiorColor: state.interiorColorReducer,
        trimColor: state.trimColorReducer
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(sidebarThirdStep);