import React, { Component } from 'react'

import styles from '../styles/app.module.css';

class footer extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }
    render() {
        return (
            <footer>
                <div className={styles.bottomBar}><p>Cena: 1 350 000 Kč</p></div>
                <button onClick={this.continue}>DALŠÍ KROK</button>
            </footer>
        )
    }
}

export default footer
