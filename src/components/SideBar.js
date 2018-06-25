import React from 'react';
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import styled from 'styled-components';
import { Redirect,withRouter } from 'react-router-dom';
import {configurestore} from '../Redux/store/configureStore'
import {onExpand,onCollapse} from '../Redux/actions/navaction'
import '@trendmicro/react-sidenav/dist/react-sidenav.css';

const Main = styled.main`
    position: relative;
    overflow: hidden;
    transition: all .15s;
    padding: 0 20px;
    margin-left: ${props => (props.expanded ? 240 : 64)}px;
`;

const store = configurestore()

class SideBar extends React.Component {

    state = {
        selected: '/',
        expanded: false
    };

    onToggle = (expanded) => {

        expanded ? store.dispatch(onExpand):store.dispatch(onCollapse)
        this.setState({ expanded: expanded });
        
        
        console.log("State of store :: " + store.getState());
        
        console.log("FROM SIDENAV" + this.state.expanded)
    };

    renderBreadcrumbs(props) {
        const { selected } = this.state;
        console.log("From bred crumbs " + this.state.expanded)
        return (
         this.state.expanded ? "<h1>Rended   fdsfsfdfsdf so true</h1>":"h1>Rended   so false ue</h1>"
        );
    }


    render () {
                return (
                    <div>
                         <SideNav
                            onSelect={(selected) => {
                                this.setState({selected: selected})
                                this.props.history.push('/portfolio')

                            }}
                            onToggle={this.onToggle}
                            >
                            <SideNav.Toggle />
                            <SideNav.Nav defaultSelected="/">
                                <NavItem eventKey="/">
    
                                    <NavIcon>
                                        <i className="fa fa-fw fa-home" style={{ fontSize: '1.75em' }} />
                                    </NavIcon>
                                    <NavText>
                                        Home
                                    </NavText>
                                </NavItem>
                                <NavItem eventKey="charts">
                                
                                    <NavIcon>
                                        <i className="fa fa-fw fa-line-chart" style={{ fontSize: '1.75em' }} />
                                    </NavIcon>
                                    <NavText>
                                        Charts
                                    </NavText>
                                    <NavItem eventKey="charts/linechart">
                                        <NavText>
                                            Line Chart
                                        </NavText>
                                    </NavItem>
                                    <NavItem eventKey="charts/barchart">
                                        <NavText>
                                            Bar Chart
                                        </NavText>
                                    </NavItem>
                                </NavItem>
                            </SideNav.Nav>
                        </SideNav>
                 
            
                </div>
                )
}
}


export default withRouter(SideBar)
