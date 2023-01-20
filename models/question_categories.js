'use strict';
import { Model } from 'sequelize';
export default (sequelize, DataTypes) => {
  class question_categories extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  question_categories.init({
    username: DataTypes.STRING,
    password: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'question_categories',
  });
  return question_categories;
};