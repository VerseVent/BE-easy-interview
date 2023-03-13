const { Joi, Segments } = require("celebrate");

// export const quizSchema = {
//   [Segments.BODY]: Joi.object().keys({
//     candidates_id: Joi.number().integer().min(1).required(),
//     title: Joi.string().min(2).max(100).required(),
//     started_at: Joi.date(),
//     ended_at: Joi.date(),
//     questions_results: Joi.array()
//       .min(1)
//       .items(
//         Joi.object({
//           question_point: Joi.number().integer().min(0).required(),
//           questions_id: Joi.number().integer().min(1).required(),
//         })
//       ),
//   }),
// };
