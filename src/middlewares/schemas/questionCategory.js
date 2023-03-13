const { Joi, Segments } = require("celebrate");

export const singleQuestionCategorySchema = {
  [Segments.PARAMS]: Joi.object().keys({
    category_id: Joi.number().integer().required().min(1),
  }),
};
