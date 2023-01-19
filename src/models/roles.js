import { DataTypes } from "sequelize"
export function createRoles (sequelize) {
    return sequelize.define('roles',{
        role: {
            type: DataTypes.STRING,
            allowNull: false
        }
    })
} 
