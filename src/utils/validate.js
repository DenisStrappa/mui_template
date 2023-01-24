import joi from "joi";
import validateMessage from "./validateMessage";

const schema = {
  name: joi
    .string()
    .required()
    .min(3)
    .max(20)
    .error((errors) => validateMessage(errors)),
  lastname: joi
    .string()
    .required()
    .min(3)
    .max(20)
    .error((errors) => validateMessage(errors)),
  email: joi
    .string()
    .email({ tlds: { allow: false } })
    .max(200)
    .error((errors) => validateMessage(errors)),
  password: joi
    .string()
    .alphanum()
    .required()
    .min(6)
    .max(30)
    .error((errors) => validateMessage(errors)),
};

const validate = (name, object) => {
  let res = schema[name].validate(object).error || "";
  return res && res.message;
};

export default validate;