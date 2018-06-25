import React from 'react';
import { Link } from 'react-router-dom';
import Main from './MainAlign'


export default class extends React.Component {

  state = {
    expanded: false
  }

  render() {

      return (
        <div>
        <Main expanded={this.state.expanded}>
        <h1>My Work</h1>
        <p>Checkout the stuff I've done:</p>
        <Link to="/portfolio/1">Item One</Link>
        <Link to="/portfolio/2">Item Two</Link>
        </Main>  
        </div>
      )

  }

}




