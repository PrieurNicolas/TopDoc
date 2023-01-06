import { DataTypes, Model } from "sequelize";
import { sequelize } from "../database/connect";
import { concatErrorMessage } from "../database/method"

export class Location extends Model {
    loc_id!: number
    address!: string
    zipCode!: number
    city!: number

}

Location.init({
    loc_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    address: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notNull: { msg: concatErrorMessage('Address') },
            notEmpty: { msg: concatErrorMessage('Address') }
        }
    },
    zipCode: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    city: {
        type: DataTypes.STRING,
        allowNull: false
    }
    
},
    {
        sequelize: sequelize,
        freezeTableName: true,
        tableName: "location",
        underscored: true
    }
);