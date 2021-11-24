import React, {
  FC,
  PureComponent,
  memo,
  useRef,
  useMemo,
  useReducer,
  useCallback,
  useState,
} from 'react';

import Users from '../../components/users/index';
import type { UsersProps } from '../../components/users/types';
import Avatar from '../../components/avatar';

// const App: FC<UsersProps> = ({ users }) => {
//   return (
//     <div className="app">
//       <Users users={users} />
//       {/* <Avatar /> */}
//     </div>
//   );
// };

interface IDataRecord {
  label: string; // uniq
  value: number;
  // id: Math.random().toString(36).slice(2),
}

interface IAppProps {
  size?: number;
}

interface IRowProps {
  data: IDataRecord;
  index: number;
  onUpdate: (index: number) => void;
}

function generateValue(): number {
  return Math.round(100 + Math.random() * 900);
}

const Row2: FC<IRowProps> = memo(({ data, onUpdate, index }) => {
  const { label, value } = data;
  const renderCount = useRef(0);
  const handleUpdate = () => {
    onUpdate(index);
  };
  renderCount.current += 1;
  return (
    <div className="row2">
      <span className="label">{label}:</span>
      <span className="row2__value">{value}</span>{' '}
      <span className="row2__count">({renderCount.current})</span>{' '}
      <button className="button" onClick={handleUpdate} type="button">
        Update
      </button>
    </div>
  );
});

Row2.displayName = 'Row2';

const App2: FC<IAppProps> & {
  generateValue: typeof generateValue;
} = (props) => {
  const { size = 2 } = props;
  const [list, setList] = useState(
    Array.from({ length: size }, (_el, index) => ({
      label: `label ${index + 1}`,
      value: App2.generateValue(),
    }))
  );
  const handleUpdate = useCallback((index: number) => {
    setList((items) =>
      items.map((item, idx) =>
        index === idx ? { ...item, value: App2.generateValue() } : item
      )
    );
  }, []);
  return (
    <div>
      <h1>Test app</h1>
      {list.map((el, index) => {
        return (
          <Row2
            data={el}
            index={index}
            onUpdate={handleUpdate}
            key={el.label}
          />
        );
      })}
    </div>
  );
};

App2.generateValue = generateValue;

export default App2;

// export default App;

// class App extends PureComponent {
//   componentDidMount() {
//     console.log('User componentDidMount : ', this.props.name);
//   }

//   componentDidUpdate(prevProps: UserProps) {
//     console.log(
//       'User componentDidUpdate : ',
//       prevProps.name,
//       '->',
//       this.props.name
//     );
//     console.log('User componentDidUpdate this.props : ', this.props);
//   }

//   componentWillUnmount() {
//     console.log('User componentWillUnmount ', this.props.name);
//   }

//   onClick() {
//     console.log(this);
//   }

//   render() {
//     console.log('User render : ', this.props.name);
//     return (
//       <span>
//         <button
//           type="button"
//           onClick={function (args) {
//             console.log('args : ', args);
//             console.log('args : ', this);
//           }}
//         >
//           Click me
//         </button>
//       </span>
//     );
//   }
// }

// export default App;

// import { connect } from 'react-redux';
// import 'normalize.css';

// import '../../assets/theme/global.scss';
// import { AuthType, initialStateType } from '../../modules/types';
// // import App from '../../components/app';

// export default class App extends Component {
//   render() {
//     return <div>Hello</div>;
//   }
// }

// class AppContainer extends PureComponent<{ auth: AuthType }> {
//   render() {
//     return <App {...this.props} />;
//   }
// }

// function mapStateToProps(state: initialStateType) {
//   const { auth } = state;
//   return {
//     auth,
//   };
// }

// export default connect(mapStateToProps)(AppContainer);
