import React, { Component } from 'react'
import Conact from './Conact';
 class Contscts extends Component {

    state = { // hadi comme si 3endi depuis la base de données
        contscts: [
            { name: "Rayane", tel: "068866221", email: "rayaneouiza@gmail.com" },
            {  name: "Selma", tel: "068866221", email: "rayaneouiza@gmail.com" },
            { name: "Riham", tel: "068866221", email: "rayaneouiza@gmail.com" }
        ]
    }

  render() {
    const { contscts } = this.state;
    return (
      <div>
        {contscts.map(contact => (
            <Conact 
             data={contact} />
        ), this)}
      </div>
    );
  }
}
/// on a utiliser data = {contact } pour ne pas appeler tous les propriétés a chaque fois que nous avons un contact.

export default Contscts;