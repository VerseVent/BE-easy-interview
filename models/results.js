'use strict';
import { Model } from 'sequelize';
module.exports =(sequelize, DataTypes) => {
  class results extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // this.hasMany(models.candidates, {as:'candidates'});
      this.belongsToMany(models.questions,{through:"questions_results"});
      // define association here
    }
  }
  results.init({
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    candidate_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "candidates",
        key: "id",
      },
    },
  }, {
    sequelize,
    modelName: 'results',
  });
  return results;
};