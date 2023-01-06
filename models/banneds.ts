import { DataTypes, Model } from "sequelize";
import { sequelize } from "../database/connect";
import { concatErrorMessage } from "../database/method"

export class Ban extends Model {
    banMail!: string
    reason!: string
}

Ban.init({
    banMail: {
        type: DataTypes.STRING,
        primaryKey: true,
    },
    reason: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notNull: { msg: concatErrorMessage('Reason') },
            notEmpty: { msg: concatErrorMessage('Reason') }
        }
    },
},
    {
        sequelize: sequelize,
        freezeTableName: true,
        tableName: "banned",
        underscored: true
    }
);