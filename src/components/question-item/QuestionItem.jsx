import React, { useCallback, useRef } from 'react';

import Image from '../image';
import TestList from '../test-list';
import SingleList from '../single-list';
import TextField from '../field-styled';
import './question-item.scss';

const QuestionItem = ({
  question,
  action = '',
  method = 'POST',
  type,
  image,
  options,
}) => {
  const formRef = useRef(null);
  const fieldName = 'answer';
  // const onSubmit = useCallback(() => {
  //   if (formRef.current) {
  //     const formData = new FormData(formRef.current);
  //   }
  // }, [formRef]);
  const memoizedCreateAnswers = useCallback(() => {
    switch (type) {
      case 'test': {
        return <TestList options={options} />;
      }
      case 'question': {
        return <TextField name={fieldName} label="Enter complete answer" />;
      }
      case 'single': {
        return <SingleList options={options} name={fieldName} />;
      }
      case 'number': {
        return (
          <TextField
            type="number"
            name={fieldName}
            label="Enter a numeric answer"
          />
        );
      }
      default: {
        return null;
      }
    }
  }, [type, options]);
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
      <div className="question-item__answers">{memoizedCreateAnswers()}</div>
      <div className="question-item__control" />
    </form>
  );
};

export default QuestionItem;
