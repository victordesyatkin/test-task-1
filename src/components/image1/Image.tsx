import React, { PureComponent, Component } from 'react';

class Image extends PureComponent {
  componentDidMount() {
    console.log('Image componentDidMount : ', this.props);
  }

  componentDidUpdate(prevProps) {
    console.log('Image componentDidUpdate : ', prevProps, '->', this.props);
  }

  componentWillUnmount() {
    console.log('Image componentWillUnmount ', this.props);
  }

  render() {
    console.log('Image render : ', this.props);
    return <span>{`Image ${this.props.name}`}</span>;
  }
}

export default Image;
