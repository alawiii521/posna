import { validate } from "jsonschema";
import userValidatorSchema from "./user.validator";

type Validator = {
  [key: string]: (arg: unknown) => ReturnType<typeof validate>;
};

const validator: Validator = {
  user(arg: unknown): ReturnType<typeof validate> {
    return validate(arg, userValidatorSchema);
  },
};

export default validator;
