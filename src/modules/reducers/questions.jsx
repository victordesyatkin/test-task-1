import faker from 'faker';

const types = ['test', 'single', 'question', 'number'];

function Options() {
  this.id = faker.datatype.uuid();
  this.content = faker.lorem.sentence();
}

function Question(id) {
  this.id = id;
  this.question = faker.lorem.sentence(6);
  this.type = null;
  this.image = null;
  this.time = null;
  this.options = null;
}

function createOptions(count = 3) {
  const list = [];
  for (let i = 0; i < count; i += 1) {
    list.push(new Options());
  }
  return list;
}

function createQuestions(count = 9) {
  const list = {};
  for (let i = 0; i < count; i += 1) {
    const id = faker.datatype.uuid();
    const question = new Question(id);
    const type = types[faker.datatype.number({ max: 3 })];
    question.type = type;
    if (['test', 'single'].includes(type)) {
      question.options = createOptions(
        faker.datatype.number({ min: 2, max: 4 })
      );
    }
    if (faker.datatype.boolean()) {
      question.image = faker.image.image(400, 400);
    }
    if (faker.datatype.boolean()) {
      question.time = 60;
    }
    list[id] = JSON.stringify(question);
  }
  return list;
}

const initialQuestionsState = createQuestions(
  faker.datatype.number({ min: 9, max: 14 })
);

const questionsReducer = (state = initialQuestionsState, action) => {
  switch (action.type) {
    default: {
      return state;
    }
  }
};

export { questionsReducer, initialQuestionsState, Question };
