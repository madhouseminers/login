export default (_, { email, password }) => {
  console.log(email, password);
  return { email, password };
};
