import React, { Component } from 'react'
import styles from '../styles/app.module.css';

class header extends Component {
    render() {
        return (
            <header className={styles.header}>
                <span className={styles.headerText}>BMW 330i Sedan</span>
            </header>
        )
    }
}

export default header
