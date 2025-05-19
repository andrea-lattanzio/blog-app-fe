const reactArticles = [
  {
    id: 'f9e8d7c6-b5a4-3210-fedc-ba9876543210',
    title: 'React Fundamentals for Beginners',
    description:
      'A beginner-friendly guide to understanding the core principles of the React JavaScript library for building user interfaces.',
    tag: 'react',
    createdAt: '2025-05-17T08:00:00Z',
    updatedAt: '2025-05-18T11:45:00Z',
    userId: 'user-789',
    chapters: [
      {
        id: 'chap-2-react',
        title: 'JSX: JavaScript XML',
        paragraphs: [
          {
            id: 'para-2-2-react',
            text: "Here's a simple example of JSX:",
          },
        ],
        codeSections: [
          {
            id: 'code-1-react',
            language: 'jsx',
            code: '"const element = <h1>Hello, React!</h1>;"',
            caption: 'A simple JSX element',
          },
          {
            id: 'code-2-react',
            language: 'jsx',
            code: '"function Welcome(props) {\\n  return <h1>Hello, {props.name}</h1>;\\n}"',
            caption: 'A functional component using JSX',
          },
        ],
      },
    ],
  },
  {
    id: 'e6f7d8c9-a0b1-2345-6789-0abcdef12345',
    title: 'Advanced State Management in React with Redux',
    description:
      'Explore advanced techniques for managing application state in React using the Redux library.',
    tag: 'react',
    createdAt: '2025-05-20T09:30:00Z',
    updatedAt: '2025-05-20T14:00:00Z',
    userId: 'user-789',
    chapters: [
      {
        id: 'chap-1-redux',
        title: 'Understanding the Redux Principles',
        paragraphs: [
          {
            id: 'para-1-1-redux',
            text: 'Redux is a predictable state container for JavaScript applications. It helps you write applications that behave consistently, run in different environments (client, server, and native), and are easy to test. Redux is based on three core principles: Single source of truth, State is read-only, and Changes are made with pure functions.',
          },
          {
            id: 'para-1-2-redux',
            text: "The 'single source of truth' means your application state is stored in one place called the 'store'. 'State is read-only' implies that you should not modify the state directly; instead, you dispatch 'actions' that describe what happened. 'Changes are made with pure functions' refers to 'reducers', which are pure functions that take the previous state and an action, and return a new state.",
          },
        ],
      },
      {
        id: 'chap-2-redux',
        title: 'Actions, Reducers, and the Store',
        paragraphs: [
          {
            id: 'para-2-1-redux',
            text: "Actions are plain JavaScript objects that have a 'type' field describing the action and can optionally carry additional data (the payload). Reducers are pure functions that specify how the application's state changes in response to actions. The store is the object that holds the application's state; it's created using a reducer.",
          },
          {
            id: 'para-2-2-redux',
            text: "Here's an example of a simple action:",
          },
          {
            id: 'para-2-3-redux',
            text: "And here's a basic reducer:",
          },
        ],
        codeSections: [
          {
            id: 'code-1-redux',
            language: 'javascript',
            code: '"{\\n  type: \'INCREMENT_COUNTER\',\\n  payload: 1\\n}"',
            caption: 'An example Redux action',
          },
          {
            id: 'code-2-redux',
            language: 'javascript',
            code: "function counterReducer(state = { count: 0 }, action) {\\n  switch (action.type) {\\n    case 'INCREMENT_COUNTER':\\n      return { count: state.count + action.payload };\\n    default:\\n      return state;\\n  }\\n}\"",
            caption: 'A simple Redux reducer',
          },
        ],
      },
    ],
  },
];

export default reactArticles;
