import React, { PureComponent } from 'react';
import QuestionList from '../question-list/QuestionList';

export default class App extends PureComponent {
  render() {
    const { questions } = this.props;
    return (
      <div className="app">
        <QuestionList questions={questions} />
      </div>
    );
  }
}
