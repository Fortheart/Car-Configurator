import React from 'react';
import { connect } from 'react-redux';
import styles from '../styles/sidebar.module.css';

class sidebarThirdStep extends React.Component {

    render() {
        return (

            <div className={styles.sidebar}>
                <h2>Summary:</h2>
                <h4>BMW {this.props.engine.name} {this.props.model.name}</h4>
                <div className={styles.spacer}></div>
                <div className={styles.sum}>
                    <div>
                        <p> {this.props.engine.name}</p>
                        <p>$ {this.props.engine.price}</p>
                        <p><span className={styles.bluePlus}>+</span> {this.props.model.name}</p>
                        <p>$ {this.props.model.price}</p>
                        <p><span className={styles.bluePlus}>+</span> {this.props.paint.officialName}</p>
                        <p>$ {this.props.paint.price}</p>
                        <p><span className={styles.bluePlus}>+</span> {this.props.wheels.officialName}</p>
                        <p>$ {this.props.wheels.price}</p>
                        <p><span className={styles.bluePlus}>+</span> {this.props.interiorColor.name}</p>
                        <p>$ {this.props.interiorColor.price}</p>
                        <p><span className={styles.bluePlus}>+</span> {this.props.trimColor.name}</p>
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