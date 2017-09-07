import React from 'react';
import {render} from 'react-dom';
import {Container, Header, HeaderBrand, HeaderUser, Navbar} from './components';
import NavData from './data/nav.js';

class App extends React.Component {
    
    constructor(){
        super();
    }
    
    render() {
        return (
          <Container>
                <Header>
                    <HeaderBrand><img src={'./images/logo.png'} alt="Project Lexi" className="logo"/></HeaderBrand>
                    <Navbar data={NavData} />
                    <HeaderUser>Guest User</HeaderUser>
                </Header>
          </Container>
        );
    }
}

render(<App/>, document.getElementById('app'));