import { DataTypes, Model } from "sequelize";
import { sequelize } from "../database/connect";
import { concatErrorMessage } from "../database/method"

export class Time_slot extends Model {
    time_slot_id!: number
    day!: string
    start!: string
    end!: string
    duration!: string

}

Time_slot.init({
    time_slot_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },

    day: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notNull: { msg: concatErrorMessage('day') },
            notEmpty: { msg: concatErrorMessage('day') }
        }
    },

    start: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notNull: { msg: concatErrorMessage('start') },
            notEmpty: { msg: concatErrorMessage('start') }
        }
    },

    end: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notNull: { msg: concatErrorMessage('end') },
            notEmpty: { msg: concatErrorMessage('end') }
        }
    },

    duration: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notNull: { msg: concatErrorMessage('duration') },
            notEmpty: { msg: concatErrorMessage('duration') }
        }
    },


},
    {
        sequelize: sequelize,
        freezeTableName: true,
        tableName: "time_slot",
        underscored: true
    }
);