import { DataTypes, Model } from "sequelize";
import { sequelize } from "../database/connect";
import { concatErrorMessage } from "../database/method"

export class Token extends Model {
    token_id!: number
    refreshToken!: string
    tokenPush!: string
}

Token.init({
    token_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    refreshToken: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notNull: { msg: concatErrorMessage('Token') },
            notEmpty: { msg: concatErrorMessage('Token') }
        }
    },
    tokenPush: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notNull: { msg: concatErrorMessage('Token') },
            notEmpty: { msg: concatErrorMessage('Token') }
        }
    }
},
    {
        sequelize: sequelize,
        freezeTableName: true,
        tableName: "token",
        underscored: true
    }
);