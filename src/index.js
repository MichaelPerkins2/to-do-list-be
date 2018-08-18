import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const { GraphQLServer } = require('graphql-yoga')

const typeDefs = `
    type Query {
        hello(name: String): String!
    }
`

const resolvers = {
    Query: {
        hello: (_, { name }) => `Hello ${name || 'World'}`,
    },
}

const server = new GraphQLServer({ typeDefs, resolvers })
server.start(() => console.log('Server is running on localhost:4000'))


ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
