import { config } from "../../../config/dev";
import redis from "../../redis/redisClient";
export function resultsController() {
    async function saveQuizProgress(req, res, next) {
      try {
        const { id } = req.auth;
        const { quiz } = req.body;
        await redis.setEx(`quiz:${id}`, config.REDIS_EXPIRED, JSON.stringify(quiz));
        res.json('quiz saved');
      } catch (e) {
        next(e);
      }
    }
    async function getQuizProgress(req, res, next) {
        try {
          const { id } = req.auth;
            
          const quizProgres = await redis.get(`quiz:${id}`);
        
          res.json(JSON.parse(quizProgres));
        } catch (e) {
          next(e);
        }
      }
    return {
        saveQuizProgress,
        getQuizProgress
    };
  }
  