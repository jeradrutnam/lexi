import React from 'react';

class Header extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <header className='header header-default'>{ this.props.children }</header>
    );
  }

}

export default Header;