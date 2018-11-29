// UserDetails.jsx
import React, { Component } from 'react';


class Step1 extends Component{

    saveAndOk = (e) => {
        e.preventDefault()
        this.props.nextStep()
    }

    render(){
        const { values } = this.props;
        
        return(
            <div>
                <form onSubmit={this.saveAndOk}>
                    <h1>Etape 1</h1>
                    
                    <label>Civilité : </label>
                    
                    <select value={values.civilite} name="civilite" onChange={this.props.handleChange('civilite')}>
                        <option value="mr">Mr</option>
                        <option value="mme">Mme</option>
                    </select>

                    <label>Nom : </label>
                    <input required type="text" onChange={this.props.handleChange('nom')} value={values.nom} />

                    <label>Prénom : </label>
                    <input required type="text" onChange={this.props.handleChange('prenom')} value={values.prenom} />

                    <label>Email : </label>
                    <input required type='email' onChange={this.props.handleChange('email')} value={values.email} />

                    <label>Tel : </label>
                    <input type="tel" onChange={this.props.handleChange('tel')} value={values.tel} placeholder="+33 _ __ __ __ __" pattern="+33[0-9]{8}" />

                    <button type="submit">Etape 2</button>
                </form>
            </div>
        )
    }
}

export default Step1;