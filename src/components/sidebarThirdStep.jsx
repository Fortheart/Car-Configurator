import React from 'react';
import { connect } from 'react-redux';
import styles from '../styles/app.module.css'

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

    showInterior() {
        this.props.setShowInterior()
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
        this.showInterior()
        return (

            <div className={styles.sidebar}>
                <h2>Upholstery</h2>
                <div className={styles.physicalSpecs}>
                    <div>
                        {this.state.interiorColor.colors && this.state.interiorColor.colors.map(color => {
                            if (this.state.interiorColorSelectedId === color.id) {
                                return (
                                    <div>
                                        <div onClick={() => { this.interiorColorHandleClick(color.id, color.type, color.reducerId, color.price) }} className={styles.colorSelected} style={{ backgroundImage: `url(${color.url})` }} ></div>
                                        <div className={styles.colorSelectedBackground}>$ {color.price}</div>
                                    </div>
                                )
                            }
                            else {
                                return (
                                    <div onClick={() => { this.interiorColorHandleClick(color.id, color.type, color.reducerId, color.price) }} style={{ backgroundImage: `url(${color.url})` }} ></div>
                                )
                            }
                        })}

                    </div>
                </div>

                {/*TRIM*/}
                <h2 style={{ margin: `10.8rem 0 0 3.4rem` }}>Trim</h2>
                <div className={styles.physicalSpecs}>
                    <div>
                        {this.state.trimColor.colors && this.state.trimColor.colors.map(color => {
                            if (this.state.trimColorSelectedId === color.id) {
                                return (
                                    <div>
                                        <div onClick={() => { this.trimColorHandleClick(color.id, color.type, color.reducerId, color.price) }} className={styles.colorSelected} style={{ backgroundImage: `url(${color.url})` }} ></div>
                                        <div className={styles.colorSelectedBackground}>$ {color.price}</div>
                                    </div>
                                )
                            }
                            else {
                                return (
                                    <div onClick={() => { this.trimColorHandleClick(color.id, color.type, color.reducerId, color.price) }} style={{ backgroundImage: `url(${color.url})` }} ></div>
                                )
                            }
                        })}

                    </div>
                </div>
                <div className={styles.sum}>
                    <div>
                        <p>+ {this.props.interiorColor.name}</p>
                        <p>$ {this.props.interiorColor.price}</p>
                        <p>+ {this.props.trimColor.name}</p>
                        <p>$ {this.props.trimColor.price}</p>
                    </div>

                    <div className={styles.sumPrice}>
                        <p>Celkem:</p>
                        <p>+ ${this.props.interiorColor.price + this.props.trimColor.price}</p>
                    </div>
                </div>

                <div className={styles.dots}>
                    <img src={dot} alt='.' />
                    <img src={dot} alt='.' />
                    <img src={dotActive} alt='.' />
                    <img src={dot} alt='.' />
                </div>

            </div>
        )
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        setShowInterior: () => { dispatch({ type: 'SHOW_INTERIOR_TRUE' }) },
        setInteriorColor: (id, name, reducerId, price) => { dispatch({ type: reducerId, id: id, name: name, price: price }) },
        setTrimColor: (id, name, reducerId, price) => { dispatch({ type: reducerId, id: id, name: name, price: price }) }
    }
}
const mapStateToProps = (state) => {

    return {
        interiorColor: state.interiorColorReducer,
        trimColor: state.trimColorReducer
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(sidebarThirdStep);