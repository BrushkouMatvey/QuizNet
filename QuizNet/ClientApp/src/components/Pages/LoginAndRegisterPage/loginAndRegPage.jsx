import * as React from 'react';
import s from './loginAndRegPage.module.css'

class loginAndRegPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = { isLoginOpen: true, isRegisterOpen: false };
    }


    showLoginBox() {
        this.setState({ isLoginOpen: true, isRegisterOpen: false })
    }

    showRegisterBox() {
        this.setState({ isRegisterOpen: true, isLoginOpen: false })
    }


    render() {
        return (
            <div className={s.rootContainer}>

                <div className={s.boxController}>
                    <div className={`${s.controller} ${this.state.isLoginOpen ? s['selectedController'] : ""}`}
                        onClick={this.showLoginBox.bind(this)}>
                        Login
                    </div>
                    <div className={`${s.controller} ${this.state.isRegisterOpen ? s['selectedController'] : ""}`}
                        onClick={this.showRegisterBox.bind(this)}>
                        Register
                    </div>
                </div>
                <div className={s.boxContainer}>
                    {this.state.isLoginOpen && <LoginBox />}
                    {this.state.isRegisterOpen && <RegisterBox />}
                </div>

            </div>)
    }
}

class LoginBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    submitLogin(e) {

    }

    render() {
        return (
            <div className={s.innerContainer}>
                <div className={s.header}>
                    Login
            </div>
                <div className={s.box}>
                    <div className={s.inputGroup}>
                        <label htmlFor="username">Username</label>
                        <input type="text" name="username" className={s.loginInput} placeholder="Username" />
                    </div>
                    <div className={s.inputGroup}>
                        <label htmlFor="password">Password</label>
                        <input type="text" name="password" className={s.loginInput} placeholder="Password" />
                    </div>
                    <button type="button" className={s.loginBtn} onClick={this.submitLogin.bind(this)}>Login</button>
                </div>
            </div>)
    }

}


class RegisterBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = { username : "", email : "", password : "", errors: [], pwdState: null };
    }

    showValidationErr(elm, msg) {
        this.setState((prevState) => ({ errors: [...prevState.errors, { elm, msg }] }));
    }

    clearValidationErr(elm) {
        this.setState((prevState) => {
            let newArr = [];
            for (let err of prevState.errors) {
                if (elm != err.elm) {
                    newArr.push(err);
                }
            }
            return {errors:newArr};
        });
    }

    onUsernameChange(e) {
        this.setState({ username: e.target.value })
        this.clearValidationErr("username");
    }

    onEmailChange(e) {
        this.setState({ email: e.target.value })
        this.clearValidationErr("email");
    }

    onPasswordChange(e) {
        this.setState({ password: e.target.value })        
        this.clearValidationErr("password");

        if(e.target.value.length>=5){
            this.setState({pwdState: "weak"});
        }
        else this.setState({pwdState: ""});
        if(e.target.value.length>8){
            this.setState({pwdState: "medium"});
        }
        if(e.target.value.length>12){
            this.setState({pwdState: "strong"});
        }
    }


    submitRegister(e) {
        if (this.state.username == "") {
            this.showValidationErr("username", "Username Cannot be empty!")
        }
        if (this.state.email == "") {
            this.showValidationErr("email", "Email Cannot be empty!")
        }
        if (this.state.password == "") {
            this.showValidationErr("password", "Password Cannot be empty!")
        }
        if (this.state.password.length < 5) {
            this.showValidationErr("password", "Password is too short!")
        }
    }

    render() {

        let usernameErr = null, passwordErr = null, emailErr = null;
        for (let err of this.state.errors) {
            if (err.elm == "username") {
                usernameErr = err.msg;
            }
            if (err.elm == "email") {
                emailErr = err.msg;
            }
            if (err.elm == "password") {
                passwordErr = err.msg;
            }
        }


        let pwdWeak = false, pwdMedium = false, pwdStrong = false;
        if (this.state.pwdState == "weak") {
            pwdWeak = true;
          } else if (this.state.pwdState == "medium") {
            pwdWeak = true;
            pwdMedium = true;
          } else if (this.state.pwdState == "strong") {
            pwdWeak = true;
            pwdMedium = true;
            pwdStrong = true;
          }

        return (
            <div className={s.innerContainer}>
                <div className={s.header}>
                    Register
                </div>
                <div className={s.box}>
                    <div className={s.inputGroup}>
                        <label htmlFor="username">Username</label>
                        <input
                            type="text"
                            name="username"
                            className={s.loginInput}
                            placeholder="Username"
                            onChange={this.onUsernameChange.bind(this)}
                        />
                        <small className={s.dangerError}>{usernameErr ? usernameErr : ""}</small>
                    </div>
                    <div className={s.inputGroup}>
                        <label htmlFor="email">Email</label>
                        <input
                            type="text"
                            name="email"
                            className={s.loginInput}
                            placeholder="Email"
                            onChange={this.onEmailChange.bind(this)}
                        />
                        <small className={s.dangerError}>{emailErr ? emailErr : ""}</small>

                    </div>
                    <div className={s.inputGroup}>
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            name="password"
                            className={s.loginInput}
                            placeholder="Password"
                            onChange={this.onPasswordChange.bind(this)}
                        />
                        <small className = {s.dangerError}>{passwordErr ? passwordErr : ""}</small>
                        {this.state.password && <div className={s.passwordState}>
                            <div className = {`${s.pwd} ${s.pwdWeak} ${pwdWeak ? s['show'] : ""}`}></div>
                            <div className = {`${s.pwd} ${s.pwdMedium} ${pwdMedium ? s['show'] : ""}`}></div>
                            <div className = {`${s.pwd} ${s.pwdStrong} ${pwdStrong ? s['show'] : ""}`}></div>
                        </div>}
                    </div>
                    <button type="button" className={s.loginBtn} onClick={this.submitRegister.bind(this)}>Register</button>
                </div>
            </div>)
    }
}





export default loginAndRegPage;