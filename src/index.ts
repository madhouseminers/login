import { ApolloServer, gql } from "apollo-server";
import resolvers from "./resolvers";

const typeDefs = gql`
  type LoginResponse {
    email: String
    password: String
  }
  type Query {
    login(email: String, password: String): LoginResponse
  }
`;

const server = new ApolloServer({ resolvers, typeDefs });
server.listen().then(({ url }) => console.log(url));
