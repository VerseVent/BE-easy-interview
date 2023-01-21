"use strict";
import { Model } from "sequelize";
module.exports = (sequelize, DataTypes) => {
  class roles extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // console.log("M: ", new users());
      // console.log("M: ", models.roles);
      this.belongsTo(models.users, { as: "users" });
    } 
  }
  roles.init(
    {
      // id: {
      //   type: DataTypes.BIGINT,
      //   primaryKey: true,
      //   autoIncrement: true,
      // },
      role: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "roles",
    }
  );
  return roles;
};
