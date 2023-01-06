import { DataTypes, Model } from "sequelize";
import { sequelize } from "../database/connect";
import { concatErrorMessage } from "../database/method"

export class Appointment extends Model {
    date_rdv!: string
    duration!: string

}

Appointment.init({
    date_rdv: {
        type: DataTypes.DATE,
        autoIncrement: false,
        primaryKey: true,
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
        tableName: "appointment",
        underscored: true
    }
);