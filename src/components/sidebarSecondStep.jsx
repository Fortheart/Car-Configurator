import React from 'react';
import { connect } from 'react-redux';
import styles from '../styles/sidebar.module.css'

import dotActive from '../img/dot-active.png';
import dot from '../img/dot.png';

import wheelsList from '../wheelsList.json';
import colorList from '../colorsList.json';

class sidebarSecondStep extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            wheels: [],
            color: [],
            colorSelected: 0,
            colorSelectedName: '',
            colorSelectedPrice: 0,

            wheelsSelected: 0,


        }

    }

    componentDidMount() {
        const wheelsListVar = wheelsList;
        const colorListVar = colorList;
        this.setState({ wheels: wheelsListVar });
        this.setState({ color: colorListVar });
    }

    handleClick = (colorPicker, id, price, name, type) => {
        this.props.setColor(colorPicker, price, name, type)
        this.setState({ colorSelected: id })
    }

    wheelsHandleClick = (wheelsPicker, id, price, name, type) => {
        this.props.setWheels(wheelsPicker, price, name, type)
        this.setState({ wheelsSelected: id })
    }



    render() {
        return (
            <div className={styles.sidebar}>
                <h2>Paint</h2>

                <div className={styles.physicalSpecs}>
                    <div>
                        {this.state.color.colors && this.state.color.colors.map(color => {
                            if (this.state.colorSelected === color.id) {
                                return (
                                    <div>
                                        <div onClick={() => { this.handleClick(color.reducerId, color.id, color.price, color.name, color.type) }} className={styles.colorSelected} style={{ backgroundImage: `url(${color.colorImg})` }} ></div>
                                        <div className={styles.colorSelectedBackground}>${color.price}</div>
                                    </div>
                                )
                            }
                            else {
                                return <div onClick={() => { this.handleClick(color.reducerId, color.id, color.price, color.name, color.type) }} style={{ backgroundImage: `url(${color.colorImg})` }} ></div>
                            }
                        })}


                    </div>
                </div>

                <h2 className={styles.textSpacer}>Wheels</h2>
                <div className={styles.physicalSpecs}>
                    <div>

                        {this.state.wheels.wheels && this.state.wheels.wheels.map(wheels => {
                            if (this.state.wheelsSelected === wheels.id) {
                                return (
                                    <div>
                                        <div onClick={() => { this.wheelsHandleClick(wheels.reducerId, wheels.id, wheels.price, wheels.name, wheels.type) }} className={styles.colorSelected} style={{ backgroundImage: `url(${wheels.url})` }} ></div>
                                        <div className={styles.colorSelectedBackground}>${wheels.price}</div>
                                    </div>
                                )
                            }
                            else {
                                return <div onClick={() => { this.wheelsHandleClick(wheels.reducerId, wheels.id, wheels.price, wheels.name, wheels.type) }} style={{ backgroundImage: `url(${wheels.url})` }} ></div>
                            }
                        })}

                    </div>
                </ div>
                <div className={styles.sum}>
                    <div>
                        <p>+ {this.props.extColor.officialName}</p>
                        <p>$ {this.props.extColor.price}</p>
                        <p>+ {this.props.wheels.officialName}</p>
                        <p>$ {this.props.wheels.price}</p>
                    </div>

                    <div className={styles.sumPrice}>
                        <p>Summary:</p>
                        <p>+ ${this.props.extColor.price + this.props.wheels.price}</p>
                    </div>
                </div>

                <div className={styles.dots}>
                    <img src={dot} alt='.' />
                    <img src={dotActive} alt='.' />
                    <img src={dot} alt='.' />
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {

    return {
        extColor: state.extColorReducer,
        wheels: state.wheelsReducer
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setColor: (colorPicker, price, name, type) => { dispatch({ type: colorPicker, payload: price, color: name, officialName: type }) },
        setWheels: (wheelsPicker, price, name, type) => { dispatch({ type: wheelsPicker, payload: price, name: name, officialName: type }) },
        nextPage: () => { dispatch({ type: 'DECREMENT' }) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(sidebarSecondStep);




