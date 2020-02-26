import React from 'react';
import {Container} from '@material-ui/core';
import Header from './HeaderComponent';
import Additional from './AdditionalContent';

class Home extends React.Component
{
    render() {
        return (
            <Container>
                <Header/>
                <Additional/>
            </Container>
        )
    }
}

export default (Home)