import React, { Fragment, Component } from 'react';
import { NavLink } from 'react-router-dom';

class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.submitHandler = this.submitHandler.bind(this);
        this.changeHandler = this.changeHandler.bind(this);
        this.state = {
            email: '',
            password: ''
        };
    }

    changeHandler(e) {
        const target = e.target;
        const name = target.name;
        this.setState({[target.name]: target.value})
    }

    submitHandler(e) {
        e.preventDefault();
        const { email, password } = this.state;

        const payload = {
            email,
            password
        }

        fetch('http://localhost:8080/auth/login',  {
            method: 'POST',
            credentials: 'same-origin',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
        })
        
        .then(response => response.json())
        .then(response => {
            console.log(response);
            localStorage.setItem("user", JSON.stringify(response));
            history.go("/");
        })
        .catch((err) => console.log(err));
    }

    render() {
        return(
            <Fragment>
                <div className="login-form">
                    <h1>Login</h1>
                    <form onSubmit={this.submitHandler}>
                        <div className='field'>
                            <label htmlFor="email">Email</label>
                            <input type="text" name="email" placeholder="name" onChange={this.changeHandler}/>
                        </div>
                        <div className='field'>
                            <label htmlFor="password">Password</label>
                            <input type="password" name="password" type="password" placeholder="password" onChange={this.changeHandler}/>
                        </div>
                        <div className='field'>
                            <button type="submit">Log in</button>
                        </div>                        
                    </form>
                    <div className='field'>
                        <NavLink to="/signup" activeClassName="is-active" exact={true}>Sign up</NavLink>
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default LoginForm;