import React from 'react';

import RadioButton from '../radio-button';

const SingleItem = (props) => {
  const { name, content } = props;
  return (
    <div className="single-item">
      <RadioButton label={content} name={name} />
    </div>
  );
};

export default SingleItem;
