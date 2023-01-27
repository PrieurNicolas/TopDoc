import { DataTypes, Sequelize } from "sequelize";

module.exports = (sequelize: Sequelize, dataTypes: typeof DataTypes) => {
    const concatRequiredMessage = (data: string) => {
        return `${data} is required`
    }

    return sequelize.define('ban', {
        banMail: {
            type: DataTypes.STRING,
            primaryKey: true,
        },
        reason: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notNull: { msg: concatRequiredMessage('Reason') },
                notEmpty: { msg: concatRequiredMessage('Reason') }
            }
        },
    })
}