import React, { Fragment, Component } from 'react';
import { NavLink } from 'react-router-dom';

class RegisterForm extends Component {
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
        const form = e.target;
        const { email, password } = this.state;

        const payload = {
            email,
            password,
            role: 'user'
        }

        fetch('http://localhost:8080/auth/signup',  {
            method: 'PUT',
            credentials: 'same-origin',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
        })
        .then(response => response.json())
        .then(response => {
            // if (response.data.accessToken) {
            //     console.log('accessToken exists')
            //     // localStorage.setItem("user", JSON.stringify(response.data));
            // }
            console.log(response);
        })
        .catch((err) => console.log(err));
    }

    render() {
        return(
            <Fragment>
                <div className="signup-form">
                    <h1>Signup</h1>
                    <form onSubmit={this.submitHandler}>
                        <div className='field'>
                            <label htmlFor="email">Email</label>
                            <input type="text" name="email" placeholder="name" onChange={this.changeHandler}/>
                        </div>
                        <div className='field'>
                            <label htmlFor="password">Password</label>
                            <input type="password" name="password" placeholder="password" onChange={this.changeHandler}/>
                        </div>
                        <div className='field'>
                            <button type="submit">Sign up</button>
                        </div>                        
                    </form>
                    <div className='field'>
                        <NavLink to="/" activeClassName="is-active" exact={true}>Log in</NavLink>
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default RegisterForm;