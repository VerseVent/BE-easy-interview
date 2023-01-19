import { DataTypes } from "sequelize"
export function createResults (sequelize) {
    return sequelize.define('results',{
        started_at: {
            type: DataTypes.DATE,
            allowNull: false
        },
        ended_at: {
            type: DataTypes.DATE,
            allowNull: false
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false
        }
    })
} 