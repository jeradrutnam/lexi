import React from 'react';
import {render} from 'react-dom';
import {Container, Header, HeaderBrand} from './components';

class App extends React.Component {
    
    constructor(){
        super();
    }
    
    render() {
        return (
          <Container>
                <Header>
                    <HeaderBrand><img src={'./images/logo.png'} alt="Project Lexi" className="logo"/></HeaderBrand>
                </Header>
          </Container>
        );
    }
}

render(<App/>, document.getElementById('app'));