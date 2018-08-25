import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// L9-24 Creates graphql server (https://github.com/prisma/graphql-yoga)

const { GraphQLServer } = require('graphql-yoga')       // Import graphql library

// Graphql schema

const typeDefs = `
    type Query {
        hello(name: String): String!
    }
`

// Resolvers

const resolvers = {
    Query: {
        hello: (_, { name }) => `Hello ${name || 'World'}`,
    },
}

const server = new GraphQLServer({ typeDefs, resolvers })
server.start(() => console.log('Server is running on localhost:4000'))


ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
