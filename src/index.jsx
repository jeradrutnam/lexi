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
                    <HeaderBrand>Project Lexi</HeaderBrand>
                </Header>
          </Container>
        );
    }
}

render(<App/>, document.getElementById('app'));