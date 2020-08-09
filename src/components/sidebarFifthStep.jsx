import React from 'react'
import { connect } from 'react-redux';



const sidebarFifthStep = (props) => {
    const handleRedirection = () => {
        if (props.steps === 5) {
            window.location.replace("https://bmw.com")
        }
    }
    handleRedirection();
    return (
        <div style={{ 'font-size': "500px" }}>
            :)
        </div>

    )


}

const mapStateToProps = (state) => {
    return {
        steps: state.stepCounterReducer
    }
}
export default connect(mapStateToProps)(sidebarFifthStep);
