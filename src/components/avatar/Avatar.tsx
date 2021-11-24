import React, { Component } from 'react';

import Image from '../image1';
import User from '../user';

// class Avatar extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       isEditMode: false,
//     };
//     // this.ref = React.createRef();
//   }

//   componentDidMount() {
//     console.log('Avatar componentDidMount : ', this.props);
//     this.timer = setTimeout(() => {
//       this.setState((state) => {
//         return { isEditMode: !state.isEditMode };
//       });
//     }, 5e3);
//   }

//   componentDidUpdate(prevProps) {
//     console.log('Avatar componentDidUpdate : ', prevProps, '->', this.props);
//   }

//   componentWillUnmount() {
//     console.log('Avatar componentWillUnmount ', this.props);
//     clearTimeout(this.timer);
//   }

//   renderImage = (props) => <Image {...props} key="qwerty1" />;

//   setRef = (ref) => {
//     console.log('setRef : ', this);
//     this.ref = ref;
//   };

//   render() {
//     console.log('Avatar render : ', this.props);
//     console.log('Avatar this.ref : ', this.ref);
//     if (this.state.isEditMode) {
//       return (
//         <div className="avatar">
//           {/* <div className="avatar__image"> */}
//           <User name="hat" id="qwerty" key="qwerty2" />
//           {this.renderImage({ name: 'simple' })}
//           {/* </div> */}
//         </div>
//       );
//     }
//     return (
//       <div className="avatar">
//         {this.renderImage({ name: 'simple' })}
//         <User name="hat" id="qwerty" key="qwerty2" />
//         <input type="text" ref={this.setRef} />
//       </div>
//     );
//   }
// }

const Avatar = () => {
  const setRef = (ref) => {
    console.log('setRef ref : ', ref);
    console.log('setRef this : ', this);
  };
  return <input ref={setRef} />;
};

export default Avatar;
