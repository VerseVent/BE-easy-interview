"use strict";
import { Model } from "sequelize";
module.exports = (sequelize, DataTypes) => {
  class candidates extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of DataTypes lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.users, { foreignKey: "users_id" });
      this.hasMany(models.results, { foreignKey: "candidates_id" });
    }
  }
  candidates.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      position: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      username: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      linkedin_url: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      feedback: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      avatar_url: {
        type: DataTypes.STRING,
        allowNull: true,
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
      modelName: "candidates",
    }
  );
  return candidates;
};
