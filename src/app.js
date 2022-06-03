import React, { Component, Fragment } from 'react';
import { Route, Switch, NavLink, withRouter, Redirect } from 'react-router-dom';
import Clients from './pages/Clients/Clients';
import Dashboard from './pages/Dashboard/Dashboard';
import Login from './pages/Login/Login';
import Signup from './pages/Signup/Signup';
import NotFound from './pages/notfound';
import Header from './components/structure/header/header';

class App extends Component {
    constructor(props) {
        super(props);
    }
    state = {
        isAuth: false,
        token: ''
    };

    componentDidMount() {
        const user = JSON.parse(localStorage.getItem('user'));
        const token = user && user.accessToken;
        const expiryDate = localStorage.getItem('expiryDate');
        
        if (!token || !expiryDate) {
          return;
        }

        fetch('http://localhost:8080/auth/isUserAuth', {
            headers: {
                'x-access-token': token
            }
        })
        .then((response => console.log(response)));

        
        // if (new Date(expiryDate) <= new Date()) {
        //   this.logoutHandler();
        //   return;
        // }
        // const userId = localStorage.getItem('userId');
        // const remainingMilliseconds =
        //   new Date(expiryDate).getTime() - new Date().getTime();
        
        if(token) {
            this.setState({ isAuth: true, token: token });
        }
        
        // this.setAutoLogout(remainingMilliseconds);
    }

    render() {

        const routes = (
            <Switch>
                <Route exact path={["/", "/dashboard"]} component={Dashboard} />
                <Route exact path="/clients" component={Clients} />
                <Route component={NotFound} />
            </Switch> 
        );

        // let routes = (
        //     <Switch>
        //         <Route exact path="/" component={Login} />
        //         <Route exact path="/signup" component={Signup} />
        //         <Route component={NotFound} />
        //     </Switch> 
        // );
        // if(this.state.isAuth) {
        //     routes = (
        //         <Switch>
        //             <Route exact path={["/", "/dashboard"]} component={Dashboard} />
        //             <Route exact path="/clients" component={Clients} />
        //             <Route component={NotFound} />
        //         </Switch> 
        //     );
        // }
        return (
            <Fragment>
                    {console.log(this.state)}
                    {this.state.isAuth && <Header />}
                    <div className="app-wrapper">
                        {this.state.isAuth && <div className="sidebar">
                            <ul>
                                <li><NavLink to="/" activeClassName="is-active" exact={true}>Dashboard</NavLink></li>
                                <li><NavLink to="/clients" activeClassName="is-active" exact={true}>Clients</NavLink></li>
                                <li><NavLink to="/workouts" activeClassName="is-active" exact={true}>Workouts</NavLink></li>
                            </ul>
                        </div>}
                        <div className="app-page">
                            {routes}
                        </div>
                    </div>
            </Fragment>
        )
    }
}

export default App;