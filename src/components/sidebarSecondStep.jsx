import React from 'react';
import styles from '../styles/app.module.css'

import dotActive from '../img/dot-active.png';
import dot from '../img/dot.png';

class sidebarSecondStep extends React.Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }

    setToColor = event => {
        event.preventDefault();
        this.props.setExtColor(event);
        console.log(event.target.value);
    }


    updateInput(key, value) {
        this.props.updateInput({
            [key]: value
        })
    }


    render() {
        return (
            <div className={styles.sidebar}>

                <h2>Motory</h2>
                <h4>330i</h4>
                <div className={styles.physicalSpecs}>


                    <input type="radio" id="blue" name="color" value="blue" onClick={this.setToColor} />
                    <label for="blue">Blue</label><br />
                    <input type="radio" id="red" name="color" value="red" onClick={this.setToColor} />
                    <label for="blue">Red</label><br />


                    <p>Palivo:</p>
                    <p>Benzín</p>
                    <p>Výkon:</p>
                    <p>190 kW (258 PS)</p>

                    <p>Spotřeba:</p>
                    <p>6,4/100km</p>
                    <p>Zrychlení:</p>
                    <p>5,5 s</p>

                    <p>Pohon:</p>
                    <p>Zadní</p>
                    <p>Převodovka:</p>
                    <p>Sportovní automatická</p>
                </div>
                <button>Vybrat Motor</button>

                <h2>Výbava</h2>
                <h4>Model M Sport</h4>
                <div className={styles.comfortSpecs}>
                    <p>M Sport podvozek + brzdy</p>
                    <p>Funkční vybavení</p>
                    <p>18" kola</p>

                    <p>M Sport interiér</p>
                    <p>FULL LED světla</p>
                    <p>aerodynamický paket</p>

                    <p>Sportovní převodovka</p>
                    <p>BMW individual</p>
                    <p>Parkovací asistent</p>
                </div>
                <button>Vybrat výbavu</button>

                <div className={styles.dots}>
                    <a href="#"><img src={dotActive} /></a>
                    <a onClick={this.continue}><img src={dot} /></a>
                    <a href="#"><img src={dot} /></a>
                </div>

                <button onClick={this.continue}>Next step</button>
            </div>
        )
    }
}

export default sidebarSecondStep;




