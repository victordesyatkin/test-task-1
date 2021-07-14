import React, { useCallback, useRef } from 'react';

import Image from '../image';
import './question-item.scss';

const QuestionItem = ({
  question,
  action = '',
  method = 'POST',
  type,
  image,
}) => {
  const formRef = useRef(null);
  const memoizedCreateAnswers = useCallback(() => {
    return null;
  }, []);
  return (
    <form
      action={action}
      method={method}
      className="question-item"
      ref={formRef}
    >
      {image && (
        <div className="question-item__image">
          <Image image={image} />
        </div>
      )}
      <div className="question-item__question">{question}</div>
      <div className="question-item__answers">
        {memoizedCreateAnswers(type)}
      </div>
      <div className="question-item__control">item__control</div>
    </form>
  );
};

export default QuestionItem;
