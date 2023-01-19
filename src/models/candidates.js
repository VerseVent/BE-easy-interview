import { DataTypes } from "sequelize"
export function createCandidates (sequelize) {
    return sequelize.define('candidates',{
        position: {
            type: DataTypes.STRING,
            allowNull: false
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false
        },
        linkedin_url: {
            type: DataTypes.STRING,
            allowNull: true
        },
        feedback: {
            type: DataTypes.STRING,
            allowNull: true
        },
        avatar_url: {
            type: DataTypes.STRING,
            allowNull: true
        }
    })
} 