"use strict";
import { Model } from "sequelize";
module.exports = (sequelize, DataTypes) => {
  class candidates extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // this.hasMany(models.users, { as: "users" });
      this.belongsTo(models.results, { as: "results" });
    }
  }
  candidates.init(
    {
      username: DataTypes.STRING,
      password: DataTypes.STRING,
      user_id:{
        type: DataTypes.INTEGER,
        allowNull:false,
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
