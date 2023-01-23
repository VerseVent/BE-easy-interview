"use strict";
import { Model } from "sequelize";
module.exports = (sequelize, DataTypes) => {
  class results extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // this.hasMany(models.candidates, {as:'candidates'});
      this.belongsTo(models.candidates, { foreignKey: "candidates_id" });
      this.belongsToMany(models.questions, {
        through: "questions_results",
        foreignKey: "questions_id", //probably error
      });
      // define association here
    }
  }
  results.init(
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
      },
      started_at: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      ended_at: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      candidates_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "candidates",
          key: "id",
        },
      },
    },
    {
      sequelize,
      modelName: "results",
    }
  );
  return results;
};
