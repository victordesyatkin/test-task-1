import React from 'react';

import SingleItem from '../single-item';
import './single-list.scss';

const SingleList = (props) => {
  const { options, name } = props;
  return (
    <ul className="single-list">
      {options.map((option) => (
        <li className="single-list__item" key={option?.id}>
          <SingleItem {...option} name={name} />
        </li>
      ))}
    </ul>
  );
};

export default SingleList;
