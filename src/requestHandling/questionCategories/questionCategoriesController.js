import { questionCategoriesRepo } from "./questionCategoriesRepo";

export function questionCategoriesController() {
  const {
    getQuestionCategories,
    getQuestionCategoryById,
  } = questionCategoriesRepo();
  async function getCategories(req, res, next) {
    try {
      const categories = await getQuestionCategories();
      res.json(categories);
    } catch (e) {
      next(e);
    }
  }
  async function getCategoryById(req, res, next) {
    try {
      const { category_id } = req.params;
      const categoryById = await getQuestionCategoryById(category_id);
      res.json(categoryById);
    } catch (e) {
      next(e);
    }
  }
  return {
    getCategories,
    getCategoryById,
  };
}
