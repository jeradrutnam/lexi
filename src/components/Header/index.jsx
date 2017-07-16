import React from 'react';
import classNames from 'classnames';

class Header extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        const { className, htmlTag } = this.props;
        
        const Component = htmlTag || 'header';
        const defaultClasses = 'header header-default';
        
        return (
            <Component className={ classNames(className, defaultClasses) }>{ this.props.children }</Component>
        );
    }
    
}

export default Header;