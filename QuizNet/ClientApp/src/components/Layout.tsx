import * as React from 'react';
import { Container } from 'reactstrap';
import NavMenuContainer from './NavMenuContainer';

export default (props: { children?: React.ReactNode }) => (
    <React.Fragment>
        <NavMenuContainer/>
        <Container>
            {props.children}
        </Container>
    </React.Fragment>
);
