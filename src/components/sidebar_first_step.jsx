import React, { Component } from 'react'
import { connect } from 'react-redux';
import styles from '../styles/sidebar.module.css';

import dotActive from '../img/dot-active.png';
import dot from '../img/dot.png';
import closeIcon from '../img/close_icon.png';

import engineList from '../engineList.json';
import modelsList from '../models.json';
import carIdReducer from '../reducers/carIdReducer';

class sidebar_first_step extends Component {

    constructor(props) {
        super(props);
        this.state = {
            menuActive: false,
            menuTrimActive: false,
            specs: [],
            models: [],
            price: this.props.price,
            basePrice: this.props.price,
            engineSelected: 1,
            modelSelected: 1,

        }

    }



    componentDidMount() {
        const engines = engineList;
        const carModels = modelsList;
        this.setState({ specs: engines });
        this.setState({ models: carModels });
    }

    openMenuContainer = () => {
        if (this.state.menuActive === false) {
            this.setState({ menuActive: !this.menuActive })
        }
        else if (this.state.menuActive === true) {
            this.setState({ menuActive: false })
        }

    }

    openMenuTrimContainer = () => {
        if (this.state.menuTrimActive === false) {
            this.setState({ menuTrimActive: !this.menuTrimActive })
        }
        else if (this.state.menuTrimActive === true) {
            this.setState({ menuTrimActive: false })
        }

    }



    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }


    render() {
        /* const newPrice = () => {
              this.props.setPrice();
              console.log(this.state.price)
          }
          const ffs = 55555000;
          newPrice(ffs);*/

        const handlePrice = (price, name, id) => {
            this.props.setBasePrice(price, name);
            this.setState({ engineSelected: id })
        }

        const handleModelPrice = (price, name, id) => {
            this.props.setModelPrice(price, name);
            this.setState({ modelSelected: id })
        }
        const handleNewPrice = (price, id) => {
            this.props.newPrice(price);
            this.setState({ modelSelected: id })
        }

        const handleModelSelected = () => {
            if (this.state.modelWasSelected === true) {
                this.setState({ modelWasSelected: false })
            }
            else if (this.state.modelWasSelected === false) {
                this.setState({ modelWasSelected: true })
            }
        }



        const handleClick = (carId) => {
            this.props.setCarType(carId);
            console.log(carId);
        }
        const handleModelClick = (carModelId) => {
            this.props.setCarModel(carModelId);
            console.log(carModelId);
        }
        return (





            <div className={styles.sidebar}>

                {this.state.specs.engines && this.state.specs.engines.filter(spec => spec.id === this.props.carId).map(filteredSpec => {
                    return (
                        <span>
                            <h2>Engines</h2>
                            <h4>{filteredSpec.name}</h4>
                            <div className={styles.physicalSpecs}>
                                <p>Palivo:</p>
                                <p>{filteredSpec.fuel}</p>
                                <p>Výkon:</p>
                                <p>{filteredSpec.performance}</p>

                                <p>Spotřeba:</p>
                                <p>{filteredSpec.consumption}</p>
                                <p>Zrychlení:</p>
                                <p>{filteredSpec.acceleration}</p>

                                <p>Pohon:</p>
                                <p>{filteredSpec.drive}</p>
                                <p>Převodovka:</p>
                                <p>{filteredSpec.transmission}</p>
                            </div>
                        </span>
                    )
                })
                }
                <button onClick={this.openMenuContainer}>Change Engine</button>


                {
                    this.state.models.models && this.state.models.models.filter(spec => spec.id === this.props.carModelId).map(filteredSpec => {
                        return (
                            <span>
                                <h2>Models</h2>
                                <h4>{filteredSpec.name}</h4>
                                <div className={styles.comfortSpecs}>
                                    <p>{filteredSpec.seats}</p>
                                    <p>{filteredSpec.seatsMaterial}</p>
                                    <p>{filteredSpec.wheels}</p>

                                    <p>{filteredSpec.lights}</p>
                                    <p>{filteredSpec.airCondition}</p>
                                    <p>{filteredSpec.BMWIndividual}</p>

                                    <p>{filteredSpec.parkingAssistant}</p>
                                    <p>{filteredSpec.package}</p>
                                </div>
                            </span>
                        )
                    })
                }
                <button onClick={this.openMenuTrimContainer}>Change Model</button>

                <div className={styles.dots}>
                    <img src={dotActive} alt='.' />
                    <img src={dot} alt='.' />
                    <img src={dot} alt='.' />
                    <img src={dot} alt='.' />
                </div>
                {
                    this.state.menuActive === false ?
                        <div></div>
                        :
                        <div className={styles.menuContainer}>
                            <img src={closeIcon} onClick={this.openMenuContainer} alt='X'></img>

                            <h1>Gasoline</h1>
                            <div className={styles.menuContainerRow}>
                                {this.state.specs.engines.filter(spec => spec.fuel === "gas").map(filteredSpec => {
                                    if (filteredSpec.id === this.state.engineSelected) {
                                        return (
                                            <div key={filteredSpec.id} onClick={() => { handleClick(filteredSpec.reducerId); handlePrice(filteredSpec.price, filteredSpec.name, filteredSpec.id); }} className={styles.engineSelected}>
                                                <div className={styles.menuContainerHeadline}>

                                                    <p>{filteredSpec.name}</p>
                                                    <p>starting at ${filteredSpec.price}</p>
                                                </div>

                                                <div className={styles.menuContainerSpecs}>
                                                    <p><b>Palivo:</b></p>
                                                    <p>{filteredSpec.fuel}</p>
                                                    <p><b>Výkon:</b></p>
                                                    <p>{filteredSpec.performance}</p>
                                                    <p><b>Spotřeba:</b></p>
                                                    <p>{filteredSpec.consumption}</p>
                                                    <p><b>Zrychlení:</b></p>
                                                    <p>{filteredSpec.acceleration}</p>
                                                    <p><b>Pohon:</b></p>
                                                    <p>{filteredSpec.drive}</p>
                                                    <p><b>Převodovka:</b></p>
                                                    <p>{filteredSpec.transmission}</p>
                                                </div>
                                            </div>
                                        )
                                    }
                                    else {
                                        return (
                                            <div key={filteredSpec.id} onClick={() => { handleClick(filteredSpec.reducerId); handlePrice(filteredSpec.price, filteredSpec.name, filteredSpec.id); }}>
                                                <div className={styles.menuContainerHeadline}>

                                                    <p>{filteredSpec.name}</p>
                                                    <p>starting at ${filteredSpec.price}</p>
                                                </div>

                                                <div className={styles.menuContainerSpecs}>
                                                    <p><b>Palivo:</b></p>
                                                    <p>{filteredSpec.fuel}</p>
                                                    <p><b>Výkon:</b></p>
                                                    <p>{filteredSpec.performance}</p>
                                                    <p><b>Spotřeba:</b></p>
                                                    <p>{filteredSpec.consumption}</p>
                                                    <p><b>Zrychlení:</b></p>
                                                    <p>{filteredSpec.acceleration}</p>
                                                    <p><b>Pohon:</b></p>
                                                    <p>{filteredSpec.drive}</p>
                                                    <p><b>Převodovka:</b></p>
                                                    <p>{filteredSpec.transmission}</p>
                                                </div>
                                            </div>
                                        )
                                    }
                                })}
                            </div>


                            <h1>Diesel</h1>
                            <div className={styles.menuContainerRow}>

                                {this.state.specs.engines.filter(spec => spec.fuel === "diesel").map(filteredSpec => {

                                    if (filteredSpec.id === this.state.engineSelected) {
                                        return (
                                            <div key={filteredSpec.id} onClick={() => { handleClick(filteredSpec.reducerId); handlePrice(filteredSpec.price, filteredSpec.name, filteredSpec.id); }} className={styles.engineSelected}>
                                                <div className={styles.menuContainerHeadline}>

                                                    <p>{filteredSpec.name}</p>
                                                    <p>starting at ${filteredSpec.price}</p>
                                                </div>

                                                <div className={styles.menuContainerSpecs}>
                                                    <p><b>Palivo:</b></p>
                                                    <p>{filteredSpec.fuel}</p>
                                                    <p><b>Výkon:</b></p>
                                                    <p>{filteredSpec.performance}</p>
                                                    <p><b>Spotřeba:</b></p>
                                                    <p>{filteredSpec.consumption}</p>
                                                    <p><b>Zrychlení:</b></p>
                                                    <p>{filteredSpec.acceleration}</p>
                                                    <p><b>Pohon:</b></p>
                                                    <p>{filteredSpec.drive}</p>
                                                    <p><b>Převodovka:</b></p>
                                                    <p>{filteredSpec.transmission}</p>
                                                </div>
                                            </div>
                                        )
                                    }
                                    else {
                                        return (
                                            <div key={filteredSpec.id} onClick={() => { handleClick(filteredSpec.reducerId); handlePrice(filteredSpec.price, filteredSpec.name, filteredSpec.id); }}>
                                                <div className={styles.menuContainerHeadline}>

                                                    <p>{filteredSpec.name}</p>
                                                    <p>starting at ${filteredSpec.price}</p>
                                                </div>

                                                <div className={styles.menuContainerSpecs}>
                                                    <p><b>Palivo:</b></p>
                                                    <p>{filteredSpec.fuel}</p>
                                                    <p><b>Výkon:</b></p>
                                                    <p>{filteredSpec.performance}</p>
                                                    <p><b>Spotřeba:</b></p>
                                                    <p>{filteredSpec.consumption}</p>
                                                    <p><b>Zrychlení:</b></p>
                                                    <p>{filteredSpec.acceleration}</p>
                                                    <p><b>Pohon:</b></p>
                                                    <p>{filteredSpec.drive}</p>
                                                    <p><b>Převodovka:</b></p>
                                                    <p>{filteredSpec.transmission}</p>
                                                </div>
                                            </div>
                                        )
                                    }
                                })}
                            </div>
                        </div>

                }

                {/*MODELS CONTAINER*/}

                {
                    this.state.menuTrimActive === false ?
                        <div></div>
                        :
                        <div className={styles.menuContainer}>
                            <img src={closeIcon} onClick={this.openMenuTrimContainer} alt='X'></img>
                            <h1>Výbava</h1>

                            <div className={styles.menuContainerRow}>
                                {this.state.models.models && this.state.models.models.map(spec => {

                                    if (spec.id === this.state.modelSelected) {
                                        return (
                                            <div key={spec.id} className={styles.engineSelected}>
                                                <div className={styles.menuContainerHeadline}>
                                                    <p>{spec.name}</p>
                                                </div>

                                                <div className={styles.menuContainerSpecs}>

                                                    <p>{spec.seats}</p>
                                                    <p>{spec.seatsMaterial}</p>
                                                    <p>{spec.wheels}</p>

                                                    <p>{spec.lights}</p>
                                                    <p>{spec.airCondition}</p>
                                                    <p>{spec.BMWIndividual}</p>

                                                    <p>{spec.parkingAssistant}</p>
                                                    <p>{spec.package}</p>
                                                </div>
                                            </div>
                                        )
                                    }
                                    else {
                                        return (
                                            <div key={spec.id} onClick={() => { handleModelClick(spec.modelReducerId); handleModelPrice(spec.price, spec.name, spec.id); }}>

                                                <div className={styles.menuContainerHeadline}>
                                                    <p>{spec.name}</p>
                                                </div>

                                                <div className={styles.menuContainerSpecs}>

                                                    <p>{spec.seats}</p>
                                                    <p>{spec.seatsMaterial}</p>
                                                    <p>{spec.wheels}</p>

                                                    <p>{spec.lights}</p>
                                                    <p>{spec.airCondition}</p>
                                                    <p>{spec.BMWIndividual}</p>

                                                    <p>{spec.parkingAssistant}</p>
                                                    <p>{spec.package}</p>
                                                </div>
                                            </div>
                                        )
                                    }
                                })}
                            </div>
                        </div>
                }
            </div >

        )
    }

}



const mapDispatchToProps = (dispatch) => {

    return {
        setCarType: (carId) => { dispatch({ type: carId }) },
        setCarModel: (carModelId) => { dispatch({ type: carModelId }) },
        setModelPrice: (price, name) => { dispatch({ type: 'MODEL_PRICE', payload: price, name: name }) },
        setBasePrice: (price, name) => { dispatch({ type: 'ENGINE_PRICE', payload: price, name: name }) }
    }
}
const mapStateToProps = (state) => {

    return {
        carId: state.carIdReducer,
        carModelId: state.carModelReducer,

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(sidebar_first_step);
