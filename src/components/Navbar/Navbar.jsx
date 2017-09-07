import React from 'react';
import classNames from 'classnames';
import NavbarItem from './NavbarItem';

class Navbar extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        const { className, htmlTag, data } = this.props;
        
        const Component = htmlTag || 'nav';
        let defaultClasses = 'nav nav-default';
        
        return (
            <Component className={ classNames(className, defaultClasses) }>
                <ul className='nav-bar'>
                    {
                        data.map( (obj, index) => {
                            return <NavbarItem text={obj.text} link={obj.link} key={index} />;
                        })
                    }
                </ul>
            </Component>
        );
    }
    
}

export default Navbar;