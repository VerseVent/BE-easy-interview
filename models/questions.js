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
      // this.hasMany(models.users, { as: "users" });
      this.belongsToMany(models.results,{through:"questions_results"});
      // define association here
    }
  }
  questions.init(
    {
      username: DataTypes.STRING,
      password: DataTypes.STRING,
      category_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "question_categories",
          key: "id",
        },
      },
      users_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
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
