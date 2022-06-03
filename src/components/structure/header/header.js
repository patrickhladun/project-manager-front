import React, { Fragment } from 'react';
import AuthService from '../../../services/auth.service';
import { Icon } from '../../Icons/Icons';

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.handleLogout = this.handleLogout.bind(this);
    }

    handleLogout(e) {
        e.preventDefault();
        AuthService.logout();
        history.go("/");
    }

    render() {
        return (
            <Fragment>
                <div className="app-header">
                    <div className="logo"><Icon icon="rocket" />Project Manager</div>
                    <div className="account">
                        <span>Account Menu</span>
                        <button onClick={this.handleLogout}>Log out</button>
                        <div className="account-menu">
                            <span><Icon icon="avatar" /></span>
                            <button>Account Settings</button>
                        </div>
                    </div>

                </div>
            </Fragment>
        )
    }
}

export default Header;