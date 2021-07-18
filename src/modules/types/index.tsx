type AuthType = {
  id: string;
  email: string;
  token: string;
  error: string;
  isLogged: boolean;
  isRemember: boolean;
  isLoading: boolean;
};

type initialStateType = {
  common: initialCommonStateType;
  auth: initialAuthStateType;
};

type initialCommonStateType = {
  isLoading: boolean;
  error: string;
};

type initialAuthStateType = AuthType;

type initialStateQuestionsType = Record<string, Question>;

type OptionType = {
  id: string;
  content: string;
  name: string;
};

type ImageType = {
  id: string;
  src: string;
  alt: string;
};

type Question = {
  id: string;
  question: string;
  type: keyof typeof QuestionTypes;
  image: ImageType | null;
  time: number | null;
  options: OptionType[];
};

type ActionType = {
  type: string;
} & Record<string, unknown>;

type EndpointsType = {
  FETCH_AUTH: string;
  FETCH_QUESTIONS: string;
  FETCH_ANSWERS: string;
};

type RoutesType = {
  AUTH: string;
  QUESTIONS: string;
};

type ActionCreatorType = (payload?: unknown) => ActionType;

type CheckboxFieldType = Partial<{
  name: string;
  tabIndex: number;
  label: string;
  value: string;
  isHidden: boolean;
  isRequired: boolean;
  isDisabled: boolean;
  isChecked: boolean;
}>;

const enum QuestionTypes {
  'test',
  'single',
  'question',
  'number',
}

export type {
  initialStateType,
  initialCommonStateType,
  initialAuthStateType,
  initialStateQuestionsType,
  OptionType,
  Question,
  QuestionTypes,
  ActionType,
  ActionCreatorType,
  AuthType,
  EndpointsType,
  RoutesType,
  CheckboxFieldType,
};
