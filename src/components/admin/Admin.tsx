import React, { PureComponent, Component } from 'react';

import type { UserProps } from './types';

class Admin extends PureComponent<UserProps> {
  componentDidMount() {
    console.log('Admin componentDidMount : ', this.props.name);
  }

  componentDidUpdate(prevProps: UserProps) {
    console.log(
      'Admin componentDidUpdate : ',
      prevProps.name,
      '->',
      this.props.name
    );
    console.log('Admin componentDidUpdate this.props : ', this.props);
  }

  componentWillUnmount() {
    console.log('Admin componentWillUnmount ', this.props.name);
  }

  render() {
    console.log('Admin render : ', this.props.name);
    return <span>{this.props.name}</span>;
  }
}

export default Admin;
