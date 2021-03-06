import React from 'react';

import CheckboxButton from '../checkbox-field';

const TestItem = (props) => {
  const { name, content } = props;
  return (
    <div className="test-item">
      <CheckboxButton label={content} name={name} />
    </div>
  );
};

export default TestItem;
