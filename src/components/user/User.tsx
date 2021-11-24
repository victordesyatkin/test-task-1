import React, { PureComponent, Component } from 'react';

import type { UserProps } from './types';

class User extends PureComponent<UserProps> {
  componentDidMount() {
    console.log('User componentDidMount : ', this.props.name);
  }

  componentDidUpdate(prevProps: UserProps) {
    console.log(
      'User componentDidUpdate : ',
      prevProps.name,
      '->',
      this.props.name
    );
    console.log('User componentDidUpdate this.props : ', this.props);
  }

  componentWillUnmount() {
    console.log('User componentWillUnmount ', this.props.name);
  }

  render() {
    console.log('User render : ', this.props.name);
    return <span>{this.props.name}</span>;
  }
}

export default User;
