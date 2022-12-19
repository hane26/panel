 import React, { Component } from 'react'
 //verison class = > rcc
 class Conact extends Component {
    state = {	
      showContactToggle : true 
    }

  showContact(myMessage){
    console.log("hi", myMessage);
    this.UNSAFE_componentWillMount.state.showConactToggle = false;
  }
   render() {
    const {name, tel, email} = this.props.data;

     return (
      <>
      <div className="card">
        <div className="card-body">
          <h4 className="card-title">
            {name} <i onClick={ this.showContact.bind(this, name)} className="fa fa-sort-down"></i>
            </h4>
          <div className="card-text">
            {(this.state.showContactToggle) ? <ul className="list-group">
              <li className="list-group-item ">{tel}</li>
              <li className="list-group-item">{email}</li>
            </ul> : null}
   

          </div>
        </div>
      </div>
       <div>
       
       </div></>
     )
   }
 }
 // when writing methodes in react it is important to put in mind the upper case of words

 //whene we don't give value to the componunts in App.js
 Conact.defaultProps = {
    name: "Myname",
    tel: "000000",
    email: "my@email.com"
 }
 //Conact.protoType = {
  //data: PropTypes.object.isRequired
 //}
 export default Conact; // hnaya we do it haka in order que f App.js we just write export and le nom tae le fichier
