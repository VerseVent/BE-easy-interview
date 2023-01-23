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
      this.hasMany(models.questions, { foreignKey: "question_categories_id" });
    }
  }
  question_categories.init(
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
    },
    {
      sequelize,
      modelName: "question_categories",
    }
  );
  return question_categories;
};
