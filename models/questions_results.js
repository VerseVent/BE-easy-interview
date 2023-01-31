"use strict";
import { Model } from "sequelize";
module.exports = (sequelize, DataTypes) => {
  class questions_results extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.questions, {
        foreignKey: "questions_id",
      });
      this.belongsTo(models.results, {
        foreignKey: "results_id",
      });
      // define association here
      //probably error
    }
  }
  questions_results.init(
    {
      question_point: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      results_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        onDelete: "CASCADE",
        references: {
          model: "results",
          key: "id",
        },
      },
      questions_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        onDelete: "CASCADE",
        references: {
          model: "questions",
          key: "id",
        },
      },
    },
    {
      sequelize,
      modelName: "questions_results",
    }
  );
  return questions_results;
};
