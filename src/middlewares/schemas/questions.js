const { Joi, Segments } = require("celebrate");

export const singleQuestionSchema = {
  [Segments.PARAMS]: Joi.object().keys({
    question_id: Joi.number().integer().required().min(1),
  }),
};
export const createQuestionSchema = {
  [Segments.BODY]: Joi.object().keys({
    category_id: Joi.number().integer().min(1).required(),
    maxPoint: Joi.number().integer().min(0).max(5).required(),
    question: Joi.string().alphanum().min(3).max(200).required(),
    answer: Joi.string().alphanum().min(3).max(500).required(),
  }),
};

export const editQuestionSchema = {
  [Segments.BODY]: Joi.object().keys({
    question_id: Joi.number().integer().min(1).required(),
    category_id: Joi.number().integer().min(1).required(),
    maxPoint: Joi.number().integer().min(0).max(5).required(),
    question: Joi.string().alphanum().min(3).max(200).required(),
    answer: Joi.string().alphanum().min(3).max(500).required(),
  }),
};
export const deleteQuestionSchema = {
  [Segments.BODY]: Joi.object().keys({
    question_id: Joi.number().integer().min(1).required(),
  }),
};
