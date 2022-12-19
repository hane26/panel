import React from 'react'
import './navbar.css'
//version function => rfc
import PropTypes from 'prop-types' // impt
const Navbar = (props) =>
 {
    const{title} = props;
  return (
      <>
      <nav className="navbar navbar-expand-sm navbar-light bg-light">
        <a className="navbar-brand" href="#">Navbar</a>
        <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId"
            aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="collapsibleNavId">
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            <li className="nav-item active">
              <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
            </li>
          </ul>
        </div>
      </nav>
      <br/>
      <div>
        <h1>{title} </h1>
      </div></>
  )
}

Navbar.defaultProps = {
    title: "My title"
}
Navbar.protoType = {
    title: PropTypes.number.isRequired
}
export default Navbar;

// state is the data that is being displayed in the component
// props is the data that is being passed to the component
// props are immutable
// state is mutable

