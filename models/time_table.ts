import { DataTypes, Model } from "sequelize";
import { sequelize } from "../database/connect";
import { concatErrorMessage } from "../database/method"

export class Time_table extends Model {
    time_table_id!: number
    start!: string
    end!: string

}

Time_table.init({
    time_table_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },

    start: {
        type: DataTypes.DATE,
        allowNull: false,
        validate: {
            notNull: { msg: concatErrorMessage('start') },
            notEmpty: { msg: concatErrorMessage('start') }
        }
    },

    end: {
        type: DataTypes.DATE,
        allowNull: false,
        validate: {
            notNull: { msg: concatErrorMessage('end') },
            notEmpty: { msg: concatErrorMessage('end') }
        }
    },


},
    {
        sequelize: sequelize,
        freezeTableName: true,
        tableName: "time_table",
        underscored: true
    }
);