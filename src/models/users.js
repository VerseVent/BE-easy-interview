import { DataTypes } from "sequelize"
export function createUsers (sequelize) {
    return sequelize.define('users',{
        username: {
            type: DataTypes.STRING,
            allowNull: false
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        }
    })
}
// export const users = sequelize.define('users',{
//     username: {
//         type: DataTypes.STRING,
//         allowNull: false
//     },
//     password: {
//         type: DataTypes.STRING,
//         allowNull: false
//     }
// })