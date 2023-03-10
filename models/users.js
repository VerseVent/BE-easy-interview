"use strict";
import { Model } from "sequelize";
module.exports = (sequelize, DataTypes) => {
  class users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.roles, { foreignKey: "roles_id" });
      this.hasMany(models.candidates, { foreignKey: "users_id" });
      this.hasMany(models.questions, { foreignKey: "users_id" });
      // this.belongsTo(models.candidates);
      // this.belongsTo(models.candidates, { as: "candidates" });
      // this.belongsTo(models.questions, { as: "questions" });
      // this.belongsTo(models.questions);
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
      roles_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 2, // general user
        references: {
          model: "roles",
          key: "id",
        },
      },
    },
    {
      sequelize,
      modelName: "users",
    }
  );
  return users;
};
