"use strict";
import { Model } from "sequelize";
module.exports = (sequelize, DataTypes) => {
  class question_categories extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      //probably error
    }
  }
  question_categories.init(
    {
      question_point: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      results_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "results",
          key: "id",
        },
      },
      questions_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "questions",
          key: "id",
        },
      },
    },
    {
      sequelize,
      modelName: "question_categories",
    }
  );
  return question_categories;
};
