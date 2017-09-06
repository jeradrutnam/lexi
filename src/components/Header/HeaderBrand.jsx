import React from 'react';
import classNames from 'classnames';

class HeaderBrand extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        const { className, htmlTag, fixed } = this.props;
        
        const Component = htmlTag || 'div';
        let defaultClasses = 'header-brand';
        
        return (
            <Component className={ classNames(className, defaultClasses) }>{ this.props.children }</Component>
        );
    }
    
}

export default HeaderBrand;