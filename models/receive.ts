import { DataTypes, Model } from "sequelize";
import { sequelize } from "../database/connect";

export class Receive extends Model {
    id!: number
    role_id!: number
}

Receive.init({
    id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'user',
            key:'id',
        }
    },

    role_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'role',
            key: 'role_id',
        }
    },


},
    {
        sequelize: sequelize,
        freezeTableName: true,
        tableName: "receive",
        underscored: true
    }
);