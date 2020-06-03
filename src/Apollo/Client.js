import ApolloClient from "apollo-boost";

export default new ApolloClient({
  uri:
    process.env.NODE_ENV === "development"
      ? "http://localhost:4000"
      : process.env.REACT_APP_APOLLO_URI,
});
