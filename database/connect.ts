import { DataTypes, Sequelize } from "sequelize"

const UserModel = require('../models/users')

const sequelize = new Sequelize(
    `${process.env.NAME_DATABASE}`,
    `${process.env.HOST_DATABASE}`,
    `${process.env.PASS_DATABASE}`,
    {
        host: 'localhost',
        dialect: 'postgres',
        port: 5432,
        dialectOptions: {
            useUTC: false,
            dateStrings: true,
            typeCast: true
        },
        timezone: '+02:00'
    }
)

sequelize.authenticate()
    .then(() => console.log('Link established'))
    .catch((error: Error) => console.error(`Error: ${error}`)
    )

export const User = UserModel(sequelize, DataTypes)

export const initDb = () => {
    return sequelize.sync({ force: true }).then(() => {

        console.log('Database created')
    })
}
