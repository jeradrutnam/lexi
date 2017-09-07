import React from 'react';
import classNames from 'classnames';

class HeaderUser extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        const { className, htmlTag } = this.props;
        
        const Component = htmlTag || 'div';
        let defaultClasses = 'header-user';
        
        return (
            <Component className={ classNames(className, defaultClasses) }>{ this.props.children }</Component>
        );
    }
    
}

export default HeaderUser;