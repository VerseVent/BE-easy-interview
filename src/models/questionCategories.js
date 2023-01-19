import { DataTypes } from "sequelize"
export function createQuestionCategories (sequelize) {
    return sequelize.define('question_categories',{
        title: {
            type: DataTypes.STRING,
            allowNull: false
        }
    })
} 
