import * as React from 'react';
import { Collapse, Container, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import './NavMenu.css';

export default class NavMenu extends React.Component/*<{}, { isOpen: boolean }> */{
    state = {
        isOpen: false
    };

    constructor(props) {
        super(props);
    }


    render(){
        return (
            <header>
                <Navbar className="navbar-expand-sm navbar-toggleable-sm border-bottom box-shadow mb-3" light>
                    <Container >
                        <NavbarBrand className = "nav-logo_item" tag={Link} to="/">QuizNet</NavbarBrand>
                        <NavbarToggler onClick={this.toggle} className="mr-2" />
                        <Collapse className="d-sm-inline-flex flex-sm-row-reverse" isOpen={this.state.isOpen} navbar>
                            <ul className="navbar-nav flex-grow">
                                <NavItem>
                                    <NavLink tag={Link} className="text-dark" to="/">Home</NavLink>
                                </NavItem>
                                
                                <NavItem >
                                    <NavLink tag={Link} className="text-dark" to="/login">Login</NavLink>
                                </NavItem>
                                
                                <NavItem > 
                                    <NavLink tag={Link} className="text-dark" to="/profile">Profile</NavLink>
                                </NavItem>
                            </ul>
                        </Collapse>
                    </Container>
                </Navbar>
            </header>
        );
    }

    toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
}
