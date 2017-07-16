import React from 'react';
import {render} from 'react-dom';
import {Container, Header} from './components';

class App extends React.Component {
    
    constructor(){
        super();
    }
    
    render() {
        return (
          <Container>
                <Header>Project Lexi</Header>
          </Container>
        );
    }
}

render(<App/>, document.getElementById('app'));