import React, { useMemo } from 'react';

import QuestionItem from '../question-item';
import './question-list.scss';

const QuestionList = ({ questions }) => {
  const memoizedQuestions = useMemo(() => {
    const list = [];
    if (Object.prototype.toString.call(questions) === '[object Object]') {
      Object.values(questions).forEach((question) => {
        if (typeof question === 'string' && question.trim()) {
          try {
            list.push(JSON.parse(question));
            // eslint-disable-next-line no-empty
          } catch (_) {}
        }
      });
    }
    return list;
  }, [questions]);
  console.log('memoizedQuestions : ', memoizedQuestions);
  const questionList = memoizedQuestions?.map((question) => (
    <li className="question-list__item" key={question?.id}>
      <QuestionItem {...question} />
    </li>
  ));
  return (
    <ul className="question-list">
      {questionList.length ? questionList : 'Sorry, no data'}
    </ul>
  );
};

export default QuestionList;
