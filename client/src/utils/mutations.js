//login user client mutation

export const LOGIN_USER = {
  type: UserType,
  args: {
    email: { type: GraphQLString },
    password: { type: GraphQLString },
  },
};
