import React from 'react';
import { Switch, Route, Redirect } from 'react-router';
import Login from './Login';
import RecoverPassword from './RecoverPassword';
import TokenStorage from '../../utils/TokenStorage'
import logo from '../../assets/images/logo.png';
import './AuthBase.scss';

const AuthBase = () => {
    if (TokenStorage.isAuthenticated()) return <Redirect to="/" />
    return (
        <div className="dashboard-base">
            <div className="logo">
                <img src={logo}/>
            </div>
            <div className="dashboard-content">
                <div className="container">
                    <div className="auth-base">                        
                        <Switch>
                            <Redirect exact from="/auth" to="/auth/login" />
                            <Route exact path="/auth/login" component={Login} />
                            <Route exact path="/auth/recover-password" component={RecoverPassword} />
                        </Switch>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AuthBase;