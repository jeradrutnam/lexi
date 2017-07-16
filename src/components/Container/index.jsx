import React from 'react';
import classNames from 'classnames';

class Container extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        const { className, htmlTag, fluid } = this.props;
        
        const Component = htmlTag || 'div';
        const defaultClasses = (fluid) ? 'container-fluid' : 'container';
        
        return (
            <Component className={ classNames(className, defaultClasses) }>{ this.props.children }</Component>
        );
    }

}

Container.defaultProps = {
    fluid: true,
};

export default Container;