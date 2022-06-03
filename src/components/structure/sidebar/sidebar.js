import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom';

class Sidebar extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Fragment>
              <div className="app-sidebar">
                <span>Sidebar</span>
                <ul>
                    <li><NavLink to="/" activeClassName="is-active" exact={true}>Dashboard</NavLink></li>
                    <li><NavLink to="/clients" activeClassName="is-active" exact={true}>Clients</NavLink></li>
                    <li><NavLink to="/tasks" activeClassName="is-active" exact={true}>Tasks</NavLink></li>
                </ul>
              </div>
            </Fragment>
        )
    }
}

export default Sidebar;