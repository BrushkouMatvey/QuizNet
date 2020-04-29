import NavMenu from "./NavMenu"
import * as React from 'react';
import axios from 'axios'
import { connect } from "react-redux"
import setAuthUserData from "./../auth-reducer"


class NavMenuContainer extends React.Component {
    componentDidMount() {
        var xhr = new XMLHttpRequest();
        xhr.open("get", "https://localhost:44373/api/user/userdata", true);
        xhr.onload = (() => {
            var data = JSON.parse(xhr.responseText);
            debugger;
            this.props.setAuthUserData(data.userId, data.email, data.login);
        }).bind(this);
        xhr.send();
        
    }

    render() {
        return <NavMenu {...this.props} />
    }
}
//const mapStateToProps = (state) => ({
//    login: state.auth.login,
//    isAuth: state.auth.isAuth
   
////});
export default NavMenuContainer;

//export default connect(mapStateToProps, { setAuthUserData }) (NavMenuContainer) ;