const nodeArticles = [
  {
    id: 'c8b7a6d5-4e3f-2109-8765-43210fedcba9',
    title: 'Building RESTful APIs with Node.js and Express',
    description:
      'Learn how to create robust and scalable RESTful APIs using the popular Express.js framework for Node.js.',
    tag: 'node.js',
    createdAt: '2025-05-18T15:30:00Z',
    updatedAt: '2025-05-19T09:15:00Z',
    userId: 'user-234',
    chapters: [
      {
        id: 'chap-2-express',
        title: 'Setting Up Your Express Application',
        paragraphs: [
          {
            id: 'para-2-1-express',
            text: "To get started with Express, you'll need to have Node.js and npm installed. Create a new project directory, navigate into it in your terminal, and initialize a new Node.js project:",
          },
          {
            id: 'para-2-2-express',
            text: 'Then, install the Express dependency:',
          },
          {
            id: 'para-2-3-express',
            text: 'Create a file named `server.js` (or any other name you prefer) and add the basic Express application setup:',
          },
        ],
        codeSections: [
          {
            id: 'code-1-express',
            language: 'bash',
            code: '"npm init -y"',
            caption: 'Initializing a new Node.js project',
          },
          {
            id: 'code-2-express',
            language: 'bash',
            code: '"npm install express"',
            caption: 'Installing the Express dependency',
          },
          {
            id: 'code-3-express',
            language: 'javascript',
            code: "\"const express = require('express');\\nconst app = express();\\nconst port = 3000;\\n\\napp.get('/', (req, res) => {\\n  res.send('Hello World!');\\n});\\n\\napp.listen(port, () => {\\n  console.log(`Server listening at http://localhost:${port}`);\\n});\"",
            caption: 'Basic Express server setup',
          },
        ],
      },
    ],
  },
  {
    id: 'abcdef01-2345-6789-abcd-ef0123456789',
    title: 'Building GraphQL APIs with NestJS',
    description:
      'Learn how to build powerful and flexible GraphQL APIs using the NestJS framework.',
    tag: 'node.js',
    createdAt: '2025-05-22T10:15:00Z',
    updatedAt: '2025-05-22T16:30:00Z',
    userId: 'user-567',
    chapters: [
      {
        id: 'chap-1-graphql-nestjs',
        title: 'Introduction to GraphQL',
        paragraphs: [
          {
            id: 'para-1-1-graphql-nestjs',
            text: 'GraphQL is a query language for your API, and a server-side runtime for executing those queries. Developed by Facebook, GraphQL provides a more efficient and flexible alternative to RESTful APIs, allowing clients to request only the data they need and nothing more.',
          },
          {
            id: 'para-1-2-graphql-nestjs',
            text: "Key advantages of GraphQL include reduced over-fetching and under-fetching of data, strong typing, and introspection (the ability for clients to discover the API's schema).",
          },
        ],
      },
      {
        id: 'chap-2-graphql-nestjs',
        title: 'Setting Up GraphQL in NestJS',
        paragraphs: [
          {
            id: 'para-2-1-graphql-nestjs',
            text: 'NestJS provides excellent support for building GraphQL APIs. You can easily integrate GraphQL into your NestJS project by installing the necessary packages:',
          },
        ],
        codeSections: [
          {
            id: 'code-1-graphql-nestjs',
            language: 'bash',
            code: '"npm install @nestjs/graphql @nestjs/apollo graphql"',
            caption: 'Installing GraphQL dependencies in NestJS',
          },
        ],
      },
      {
        id: 'chap-3-graphql-nestjs',
        title: 'Defining Schemas and Resolvers',
        paragraphs: [
          {
            id: 'para-3-1-graphql-nestjs',
            text: "In GraphQL, you define your API's capabilities using a schema. The schema describes the data that clients can query and the operations they can perform. Resolvers are functions that provide the data for the fields in your schema.",
          },
          {
            id: 'para-3-2-graphql-nestjs',
            text: 'NestJS makes it easy to define your GraphQL schema using either the Schema First or Code First approach. With Code First, you define your GraphQL types and resolvers using TypeScript decorators.',
          },
        ],
      },
    ],
  },
];

export default nodeArticles;
