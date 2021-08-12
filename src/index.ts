import { readFileSync } from "fs";
import { resolve } from "path";

import { ApolloServer, gql } from "apollo-server";
import { buildSubgraphSchema } from "@apollo/federation";
import resolvers from "./resolvers";

const typeDefs = gql`
  ${readFileSync(resolve(__dirname, "../schema.graphql"))}
`;

const server = new ApolloServer({
  schema: buildSubgraphSchema([{ resolvers, typeDefs }]),
});
server.listen({ port: 4000 }).then(({ url }) => console.log(url));
