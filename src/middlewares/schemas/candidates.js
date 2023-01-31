const { Joi, Segments } = require("celebrate");

export const singleCandidateSchema = {
  [Segments.PARAMS]: Joi.object().keys({
    candidate_id: Joi.number().integer().required().min(1),
  }),
};
export const createCandidateSchema = {
  [Segments.BODY]: Joi.object().keys({
    position: Joi.string().alphanum().min(3).max(100).required(),
    username: Joi.string().alphanum().min(3).max(100).required(),
    linkedin_url: Joi.string().alphanum().min(3).max(200).required(),
    feedback: Joi.string().alphanum().min(3).max(500).required(),
    avatar_url: Joi.string().alphanum().min(3).max(200).required(),
  }),
};
export const editCandidateSchema = {
  [Segments.BODY]: Joi.object().keys({
    candidate_id: Joi.number().integer().min(1).required(),
    position: Joi.string().alphanum().min(3).max(100).required(),
    username: Joi.string().alphanum().min(3).max(100).required(),
    linkedin_url: Joi.string().alphanum().min(3).max(200).required(),
    feedback: Joi.string().alphanum().min(3).max(500).required(),
    avatar_url: Joi.string().alphanum().min(3).max(200).required(),
  }),
};
export const deleteCandidateSchema = {
  [Segments.BODY]: Joi.object().keys({
    candidate_id: Joi.number().integer().min(1).required(),
  }),
};
