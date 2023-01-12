import { DataTypes, Model } from "sequelize";
import { sequelize } from "../database/connect";
import { concatErrorMessage } from "../database/method"

export class Manager extends Model {
    manager_id!: number
    activity_id!: number
    function!: string
    practitioner!: boolean
}

Manager.init({
    manager_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
    },
    function: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notNull: { msg: concatErrorMessage('function') },
            notEmpty: { msg: concatErrorMessage('function') }
        }
    },
    practitioner:{
        type: DataTypes.BOOLEAN,
        allowNull:false,
    }
},
    {
        sequelize: sequelize,
        freezeTableName: true,
        tableName: "manager",
        underscored: true
    }
);