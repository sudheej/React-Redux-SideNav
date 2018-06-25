import React from 'react';
import styled from 'styled-components'
import Main from './MainAlign'
import {configurestore} from '../Redux/store/configureStore';
import { connect } from 'react-redux'
import { PropTypes } from 'react';

const store = configurestore()

class HomePage extends React.Component {

  state = {
    expanded: false
  }

  constructor(props, context) {
    super(props, context);
}


 getExpansionState() {
  console.log("From render" + this.props.expandedState)
    return this.props.expandedState
 }

 componentWillReceiveProps(nextProps) {
  console.log("From render" + this.props.expandedState)
}

componentDidUpdate() {
  console.log("Component updated ???")
}

  render() {

    console.log("The value is " + this.props.expandedState)

    if (this.state.expanded) {
      
      this.setState( () => {
        return {
          expanded: false
        }
      })
    }
    console.log("SATTATA" + this.state.expanded)
 
      return (
        <div>
        <Main expanded={this.props.expandedState}>
        <h1>Welcome</h1>
        <p>This is my site. Take a look around!</p>
        </Main>  
        </div>
      )
      

  }

}



const mapStateToProps = state => {
  
  console.log("New state " + state.expanded)
  return {
    expandedState: state.expanded
  }
}

export default connect(mapStateToProps)(HomePage);

