const userValidatorSchema = {
  type: "object",
  properties: {
    username: {
      type: "string",
      minLength: 4,
      maxLength: 32,
    },
    password: {
      type: "string",
      minLength: 4,
      maxLength: 32,
    },
  },
  required: ["username", "password"],
};

export default userValidatorSchema;
