import React, { Component } from 'react'
import styles from '../styles/app.module.css';
import engineList from '../engineList.json';
import { connect } from 'react-redux';
import carIdReducer from '../reducers/carIdReducer';

class header extends Component {

    constructor(props) {
        super(props);
        this.state = {
            specs: []
        }
    }
    componentDidMount() {
        const engines = engineList;
        this.setState({ specs: engines })
    }

    render() {
        return (
            <header className={styles.header}>
                {
                    this.state.specs.engines && this.state.specs.engines.filter(spec => spec.id === this.props.carId).map(filteredSpec => {
                        return (
                            <span className={styles.headerText}>BMW {filteredSpec.name} Sedan</span>
                        )
                    })
                }
            </header>
        )
    }
}


const mapStateToProps = (state) => {

    return {
        carId: state.carIdReducer
    }
}


export default connect(mapStateToProps, null)(header);
