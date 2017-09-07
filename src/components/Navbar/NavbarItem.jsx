import React from 'react';
import classNames from 'classnames';

class NavbarItem extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        const { className, text, link } = this.props;
        
        let defaultClasses = 'nav-item';
        
        return (
            <li className={ classNames(className, defaultClasses) }><a href={link}>{text}</a></li>
        );
    }
    
}

export default NavbarItem;