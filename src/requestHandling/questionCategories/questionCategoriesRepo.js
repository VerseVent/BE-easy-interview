import { question_categories } from "../../../models/index.js";

export function questionCategoriesRepo() {
  async function getQuestionCategories() {
    return question_categories.findAll();
  }
  async function getQuestionCategoryById(category_id) {
    const categoryById = await question_categories.findOne({
      where: { id: category_id },
    });
    return categoryById;
  }

  return {
    getQuestionCategories,
    getQuestionCategoryById,
  };
}
