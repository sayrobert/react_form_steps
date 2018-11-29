import React, { Component } from 'react';

class Step2 extends Component{
    saveAndOk = (e) => {
        e.preventDefault();
        this.props.nextStep();
    }

    back  = (e) => {
        e.preventDefault();
        this.props.prevStep();
    }

    render(){
        const { values } = this.props
        return(
            <div>
                <form onSubmit={this.saveAndOk}>
                    <h1>Etape 2</h1>
                    <label>Framework préféré:</label>

                    <input onChange={this.props.handleChange('frameworkChoose')} type="radio" name="frameworkChoose" value="angular" checked={values.frameworkChoose === 'angular'} />
                    Angular
                 
                    <input onChange={this.props.handleChange('frameworkChoose')} type="radio" name="frameworkChoose" value="symfony" checked={values.frameworkChoose === 'symfony'} />
                    Symfony
                
                    <input onChange={this.props.handleChange('frameworkChoose')} type="radio" name="frameworkChoose" value="vue" checked={values.frameworkChoose === 'vue'} />
                    Vue

                    <p></p>

                    <label>Message:</label>
                    <textarea name="message" onChange={this.props.handleChange('message')} defaultValue={values.message}/>
                    
                    <button onClick={this.back}>Retour</button>
                    <button type="submit">Sauvegarder et continuer</button>
                </form>
            </div>
        )
    }
}

export default Step2;