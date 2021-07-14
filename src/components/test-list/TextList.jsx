import React from 'react';

import TestItem from '../test-item';
import './test-list.scss';

const TestList = (props) => {
  const { options } = props;
  return (
    <ul className="test-list">
      {options?.map((option) => {
        return (
          <li className="test-list__item" key={option.id}>
            <TestItem {...option} />
          </li>
        );
      })}
    </ul>
  );
};

export default TestList;
