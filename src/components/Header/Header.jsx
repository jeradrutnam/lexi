import React from 'react';
import classNames from 'classnames';

class Header extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        const { className, htmlTag, fixed } = this.props;
        
        const Component = htmlTag || 'header';
        let defaultClasses = 'header header-default';

        defaultClasses = (fixed) ? defaultClasses + ' header-fixed' : defaultClasses;
        
        return (
            <Component className={ classNames(className, defaultClasses) }>{ this.props.children }</Component>
        );
    }
    
}

export default Header;