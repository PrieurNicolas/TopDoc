import { DataTypes, Model } from "sequelize";
import { sequelize } from "../database/connect";
import { concatErrorMessage } from "../database/method"

export class Holiday extends Model {
    holiday_id!: number
    datetime!: string
    duration!: string
}

Holiday.init({
    appointmment_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    datetime: {
        type: DataTypes.DATE,
        allowNull: false,
        validate: {
            notNull: { msg: concatErrorMessage('datetime') },
            notEmpty: { msg: concatErrorMessage('datetime') }
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
        tableName: "holiday",
        underscored: true
    }
);