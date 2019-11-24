import React, { Component } from 'react';
import './Login.css'
class Login extends Component {
    render() {
        return (
            <div class="log-form">
                <h2>Login to your account</h2>
                <form>
                    <input type="text" title="username" placeholder="username" />
                    <input type="password" title="username" placeholder="password" />
                    <button type="submit" class="btn">Đăng nhập</button>
                    <a class="forgot" href="#">Forgot Username?</a>
                </form>
            </div>
        );
    }
}

export default Login;