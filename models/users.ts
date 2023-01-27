import { DataTypes, Model } from "sequelize";
import { sequelize } from "../database/connect";
import { concatErrorMessage } from "../database/method"

export class User extends Model {
    id!: number
    lastname!: string
    firstname!: string
    mail!: string
    password!: string
    birthdate!: Date
    phone_number!: string
    genre!:string
}

User.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    lastname: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notNull: { msg: concatErrorMessage('Lastname') },
            notEmpty: { msg: concatErrorMessage('Lastname') }
        }
    },
    firstname: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notNull: { msg: concatErrorMessage('Firstname') },
            notEmpty: { msg: concatErrorMessage('Firstname') }
        }
    },
    birthdate: {
        type: DataTypes.DATE,
        allowNull: false,
        validate: {
            notNull: { msg: concatErrorMessage('Birthdate') },
            notEmpty: { msg: concatErrorMessage('Birthdate') }
        }
    },
    mail: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            isEmail: true,
            notNull: { msg: concatErrorMessage('Mail') },
            notEmpty: { msg: concatErrorMessage('Mail') }
        }
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notNull: { msg: concatErrorMessage('Password') },
            notEmpty: { msg: concatErrorMessage('Password') }
        }
    },
    phone_number: {
        type: DataTypes.STRING,
        allowNull: true,
        validate: {
            is: /^$|^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/g
        },
    },
    genre: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: { msg: concatErrorMessage('Genre') },
        notEmpty: { msg: concatErrorMessage('Genre') }
    }
    }
},
    {
        sequelize: sequelize,
        freezeTableName: true,
        tableName: "user",
        underscored: true
    }
);