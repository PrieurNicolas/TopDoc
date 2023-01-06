import { DataTypes, Model } from "sequelize";
import { sequelize } from "../database/connect";
import { concatErrorMessage } from "../database/method"

export class Role extends Model {
    role_id!: number
    role!: string

}

Role.init({
    role_Id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    role: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notNull: { msg: concatErrorMessage('roleName') },
            notEmpty: { msg: concatErrorMessage('roleName') }
        }
    },
},
    {
        sequelize: sequelize,
        freezeTableName: true,
        tableName: "role",
        underscored: true
    }
);