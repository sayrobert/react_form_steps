import React, { Component } from 'react';

import Step1 from './step1';
import Step2 from './step2';
import Step3 from './step3';
import Step4 from './step4';

class MainForm extends Component {
    state = {
        step: 1,
        civilite: '',
        prenom: '',
        nom: '',
        email: '',
        tel: '',
        frameworkChoose: '',
        message: ''
    }

    nextStep = () => {
        const { step } = this.state
        this.setState({
            step : step + 1
        })
    }

    prevStep = () => {
        const { step } = this.state
        this.setState({
            step : step - 1
        })
    }

    handleChange = input => event => {
        this.setState({ [input] : event.target.value })
    }

    render(){
        const {step} = this.state;
        const { civilite, nom, prenom, email, tel, frameworkChoose, message  } = this.state;
        const values = { civilite,nom, prenom, email, tel, frameworkChoose, message };
        
        switch(step) {
            case 1:
                return <Step1 
                nextStep={this.nextStep} 
                handleChange = {this.handleChange}
                values={values}
                />
            case 2:
                return <Step2 
                nextStep={this.nextStep}
                prevStep={this.prevStep}
                handleChange = {this.handleChange}
                values={values}
                />
            case 3:
                return <Step3 
                nextStep={this.nextStep}
                prevStep={this.prevStep}
                values={values}
                />
            case 4:
                return <Step4 values={values}/>
        }
    }
}

export default MainForm;