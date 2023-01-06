import { DataTypes, Model } from "sequelize";
import { sequelize } from "../database/connect";
import { concatErrorMessage } from "../database/method"

export class Activity extends Model {
    activity_id!: number
    designation!: string
    type!: string
    valid!: boolean
    active!: boolean
}

Activity.init({
    activity_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    designation: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notNull: { msg: concatErrorMessage('designation') },
            notEmpty: { msg: concatErrorMessage('designation') }
        }
    },
    type: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notNull: { msg: concatErrorMessage('type') },
            notEmpty: { msg: concatErrorMessage('type') }
        }
    },
    valid:{
        type: DataTypes.BOOLEAN,
        allowNull:false,
    },
    active:{
        type: DataTypes.BOOLEAN,
        allowNull:false,
    }


},
    {
        sequelize: sequelize,
        freezeTableName: true,
        tableName: "activity",
        underscored: true
    }
);