"use strict";
import { Model } from "sequelize";
export default (sequelize, DataTypes) => {
  class roles extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      roles.belongsToMany(models.users)
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
