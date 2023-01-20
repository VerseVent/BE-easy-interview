"use strict";
import { Model } from "sequelize";
export default function (sequelize, DataTypes){
  class users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      users.hasMany(models.roles);
      // users.hasMany(models.candidates);
      // users.hasMany(models.questions);
    }
  }
  users.init(
    {
      id: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true,
      },
      username: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      // roles_id: {
      //   type: DataTypes.INTEGER,
      //   allowNull: false,
      // },
    },
    {
      sequelize,
      modelName: "users",
    }
  );
  return users;
};
