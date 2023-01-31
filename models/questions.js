"use strict";
import { Model } from "sequelize";
module.exports = (sequelize, DataTypes) => {
  class questions extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.question_categories, {
        foreignKey: "question_categories_id",
      });
      this.belongsTo(models.users, {
        foreignKey: "users_id",
        onDelete: "CASCADE",
      });
      this.belongsToMany(models.results, {
        through: "questions_results",
        foreignKey: "results_id", //probably error
      });
      // define association here
    }
  }
  questions.init(
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      max_point: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      question: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      answer: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      question_categories_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        onDelete: "CASCADE",
        references: {
          model: "question_categories",
          key: "id",
        },
      },
      users_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        onDelete: "CASCADE",
        references: {
          model: "users",
          key: "id",
        },
      },
    },
    {
      sequelize,
      modelName: "questions",
    }
  );
  return questions;
};
