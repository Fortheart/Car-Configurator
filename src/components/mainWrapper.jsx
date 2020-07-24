import React, { Component } from 'react'
import styles from '../styles/app.module.css';
import Header from './header';
import SidebarFirstStep from './sidebar_first_step';
import SidebarSecondStep from './sidebarSecondStep';
import MainArea from './main_area';
import Footer from './footer';




class mainWrapper extends Component {
    state = {
        step: 1,
        engine: '',
        trim: '',
        extColor: '',
        intColor: '',
        intTrimColor: ''
    }
    nextStep = () => {
        const { step } = this.state; //destructure step from state
        this.setState({
            step: step + 1
        })
    }

    setExtColor = (event) => {
        this.setState({
            extColor: event.target.value
        })
    }

    render() {
        const { step } = this.state;
        const { engine, trim, extColor, intColor, intTrimColor } = this.state;
        const values = { step, engine, trim, extColor, intColor, intTrimColor };
        const key = '';
        const value = '';


        switch (step) {
            case 1:
                return (
                    <div>
                        <Header />
                        <main>
                            <MainArea />
                            <SidebarFirstStep
                                nextStep={this.nextStep}
                                values={values}
                            />
                        </main>
                        <Footer
                            nextStep={this.nextStep}
                        />
                    </div>
                )
            case 2:
                return (
                    <div>
                        <Header />
                        <main>
                            <MainArea />
                            <SidebarSecondStep
                                nextStep={this.nextStep}
                                updateInput={this.updateInput}
                                setExtColor={this.setExtColor}
                            />
                        </main>
                        <Footer
                            nextStep={this.nextStep}
                        />
                    </div>
                )
        }


    }
}

export default mainWrapper
