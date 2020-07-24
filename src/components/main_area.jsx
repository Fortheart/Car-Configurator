import React, { Component } from 'react'

import styles from '../styles/app.module.css';

import previewCar from '../img/preview.png';

export class main_area extends Component {
    render() {
        return (
            <div className={styles.mainArea} style={{ backgroundImage: `url(${previewCar})` }}>

                <button>Exteriér</button>
                <button>Interiér</button>
            </div>
        )
    }
}

export default main_area
