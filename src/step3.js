import React, { Component } from 'react';

class Step3 extends Component{
    saveAndOk = (e) => {
        e.preventDefault();
        this.props.nextStep();

        var xhr = new XMLHttpRequest();

        const {values: { civilite, nom, prenom, email, tel, frameworkChoose, message }} = this.props;
        
        var url = "http://localhost:3001/users";
        xhr.open("POST", url, true);
        xhr.setRequestHeader("Content-Type", "application/json");
        var data = JSON.stringify({
            "civilite": {civilite}, 
            "nom": {nom},
            "prenom": {prenom},
            "email": {email},
            "tel": {tel},
            "frameworkChoose": {frameworkChoose},
            "message": {message}
        });
        xhr.send(data);
    }

    back = (e) => {
        e.preventDefault();
        this.props.prevStep();
    }

    render(){
        const {values: { civilite, nom, prenom, email, tel, frameworkChoose, message }} = this.props;

        return(
            <div>
                <h1>Confirmation</h1>
                <ul>
                    <li>
                        <p>Civilité: {civilite}</p>
                    </li>
                    <li>
                        <p>Nom: {nom}</p>
                    </li>
                    <li>
                        <p>Prénom: {prenom}</p>
                    </li>
                    <li>
                        <p>Email : {email}</p>
                    </li>
                    <li>
                        <p>Tel: {tel}</p>
                    </li>
                    <li>
                        <p>Framework préféré: {frameworkChoose}</p>
                    </li>
                    <li>
                        <p>Autre: {message}</p>
                    </li>
                </ul>

                <button onClick={this.back}>Retour</button>
                <button onClick={this.saveAndOk}>Valider</button>
            </div>
        )
    }
}

export default Step3;