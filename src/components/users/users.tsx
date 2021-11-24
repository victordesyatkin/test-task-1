import React, { PureComponent } from 'react';

import User from '../user';
import Admin from '../admin';
import { UsersProps } from './types';

class Users extends PureComponent<UsersProps> {
  constructor(props: UsersProps) {
    super(props);
    this.state = {
      users: this.props.users,
      isEditMode: false,
    };
  }

  componentDidMount() {
    console.log('Users componentDidMount : ');
    this.timer = setTimeout(() => {
      this.setState(({ users }: UsersProps) => {
        const temporary = [...users].splice(2);
        console.log('setTimeout : ', temporary);
        return { users: [users[0]].concat(temporary) };
        // return { isEditMode: true };
      });
    }, 5e3);
    // this.setState(({ users }: UsersProps) => {
    //   const temporary = [...users].splice(2);
    //   console.log('setTimeout : ', temporary);
    //   return { users: temporary };
    // });
  }

  componentDidUpdate(prevProps: UsersProps) {
    console.log('Users componentDidUpdate : ', prevProps, '->', this.props);
  }

  componentWillUnmount() {
    console.log('Users componentWillUnmount ');
    clearTimeout(this.timer);
  }

  render() {
    console.log('Users render : ');
    const users = this.state.users.map((user, index) => {
      const Component = user.role === 'admin' ? Admin : User;
      return <Component name={user.name} key={index} />;
    });
    return <div className="users">{users}</div>;
    // if (this.state.isEditMode) {
    //   return (
    //     <div className="Users">
    //       <User
    //         name={this.state.users[1].name}
    //         id={this.state.users[1].id}
    //         key={this.state.users[1].id}
    //       />
    //       <User
    //         name={this.state.users[0].name}
    //         id={this.state.users[0].id}
    //         key={this.state.users[0].id}
    //       />
    //       {/* {this.state.users.map((user, index) => (
    //         <div key={user.id}>
    //           <User name={user.name} />
    //         </div>
    //       ))} */}
    //     </div>
    //   );
    // }
    // return (
    //   <div className="Users">
    //     <User
    //       name={this.state.users[0].name}
    //       id={this.state.users[0].id}
    //       key={this.state.users[0].id}
    //     />
    //     <User
    //       name={this.state.users[1].name}
    //       id={this.state.users[1].id}
    //       key={this.state.users[1].id}
    //     />
    //     {/* {this.state.users.map((user, index) => (
    //       <div key={user.id}>
    //         <User name={user.name} />
    //       </div>
    //     ))} */}
    //   </div>
    // );
  }
}

export default Users;
