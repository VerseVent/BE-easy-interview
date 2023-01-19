import { DataTypes } from "sequelize"
export function createQuestions (sequelize) {
    return sequelize.define('questions',{
        max_point: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        question: {
            type: DataTypes.STRING,
            allowNull: false
        },
        answer: {
            type: DataTypes.STRING,
            allowNull: false
        }
    })
} 