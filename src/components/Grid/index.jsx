import React from 'react';
import classNames from 'classnames';

class Row extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
        const { className, htmlTag } = this.props;
        
        const Component = htmlTag || 'div';
        const defaultClasses = 'row';
        
        return (
            <Component className={classNames(className, defaultClasses)}>{ this.props.children }</Component>
        );
    }

}

export default Row;