const { Joi, Segments } = require("celebrate");

export const signupSchema = {
  [Segments.BODY]: Joi.object().keys({
    username: Joi.string().alphanum().min(2).max(30).required(),
    password: Joi.string()
      .pattern(new RegExp("^[a-zA-Z0-9]{3,30}$"))
      .required()
      .min(8),
  }),
};
export const loginSchema = {
  [Segments.BODY]: Joi.object().keys({
    username: Joi.string().alphanum().min(2).max(30).required(),
    password: Joi.string()
      .pattern(new RegExp("^[a-zA-Z0-9]{3,30}$"))
      .required()
      .min(8),
  }),
};
export const deleteSchema = {
  [Segments.BODY]: Joi.object().keys({
    auth: Joi.string().alphanum().length(20),
  }),
};
// export const signupSchema = {
//   [Segments.BODY]: Joi.object().keys({
//     name: Joi.string().alphanum().min(2).max(30).required(),
//     email: Joi.string().required().email(),
//     password: Joi.string()
//       .pattern(new RegExp("^[a-zA-Z0-9]{3,30}$"))
//       .required()
//       .min(8),
//     repeat_password: Joi.ref("password"),
//     age: Joi.number().integer().required().min(18),
//     about: Joi.string().min(2).max(30),
//   }),
// };
// export const signupSchema1 = {
//   [Segments.BODY]: Joi.object().keys({
//     name: Joi.string().alphanum().min(2).max(30).required(),
//     email: Joi.string().required().email(),
//     password: Joi.string()
//       .pattern(new RegExp("^[a-zA-Z0-9]{3,30}$"))
//       .required()
//       .min(8),
//     repeat_password: Joi.ref("password"),
//     age: Joi.number().integer().required().min(18),
//     about: Joi.string().min(2).max(30),
//   }),
// };
