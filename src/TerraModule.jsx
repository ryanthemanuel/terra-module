import React, { PropTypes } from 'react';
import classNames from 'classnames';
import path from 'path';
import '../src/terra-module.scss';

class TerraModule extends React.Component {
  constructor() {
    super();
    this.state = {
      isSelected: false,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ isSelected: !this.state.isSelected });
  }

  render() {
    const classes = classNames(['terra-Module',
      this.props.variant,
      this.state.isSelected && 'u-selected',
    ]);


    if (!this.props.name) {
      return null;
    }
    if (!this.props.variant) {
      return null;
    }
    return (<button
      className={classes}
      onClick={this.handleClick}
    >Terra, {this.props.name}</button>);
  }
}

TerraModule.propTypes = {
  name: PropTypes.string.isRequired,
  variant: PropTypes.string.isRequired,
};

TerraModule.defaultProps = {
  name: 'default',
  variant: 'terra-Module--default',
};

export const includePaths = path.join(__dirname, '../src/');

export default TerraModule;
