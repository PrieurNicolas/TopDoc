
import { DataTypes, Sequelize } from "sequelize"

export const sequelize = new Sequelize(
    `${process.env.NAME_DATABASE}`,
    `${process.env.HOST_DATABASE}`,
    `${process.env.PASS_DATABASE}`,
    {
        host: 'localhost',
        dialect: 'postgres',
        port: 5432,
        dialectOptions: {
            timezone: 'Etc/GMT-2'
        },
    }
)

import { users } from "./mock/usermock"
import { User } from "../models/users"

import { locations } from "./mock/localisationmock"
import { Location } from "../models/locations"

import { tokens } from "./mock/tokenmock"
import { Token } from "../models/tokens"

import { banneds } from "./mock/bannedmock"
import { Ban } from "../models/banneds"

import { roles } from "./mock/rolemock"
import { Role } from "../models/roles"

import { managers } from "./mock/managermock"
import { Manager } from "../models/managers"

import { activitys } from './mock/activitymock'
import { Activity } from '../models/activitys'

import { holidays } from "./mock/holidaymock"
import { Holiday } from "../models/holidays"

import { appointments } from "./mock/appointmentmock"
import { Appointment } from "../models/appointment"

import { time_tables } from "./mock/time_tablemock"
import { Time_table } from "../models/time_table"

import { time_slots } from "./mock/time_slotmock"
import { Time_slot } from "../models/time_slot"

import { relations } from "../models/relations"



sequelize.authenticate()
    .then(() => {
        console.log('Link established')
        relations()
    })
    .catch((error: Error) => console.error(`Error: ${error}`)
    )




export const initDb = () => {
    return sequelize.sync({ force: true }).then(() => {
        users.map(user => {
            User.create({
                lastname: user.lastname,
                firstname: user.firstname,
                mail: user.mail,
                password: user.password,
                birthdate: user.birthdate,
                phone_number: user.phone_number,
                genre: user.genre,
            }).then((response: { toJSON: () => string }) => {
                console.log('User', response.toJSON())
            })
        })

        locations.map(locations => {
            Location.create({
                address: locations.address,
                zipCode: locations.zipCode,
                city: locations.city,
            }).then((response: { toJSON: () => string }) => {
                console.log('Location', response.toJSON())
            })
        })

        tokens.map(tokens => {
            Token.create({
                refreshToken: tokens.refreshToken,
                tokenPush: tokens.tokenPush,
            }).then((response: { toJSON: () => string }) => {
                console.log('Token', response.toJSON())
            })
        })

        banneds.map(banneds => {
            Ban.create({
                banMail: banneds.banMail,
                reason: banneds.reason,
            }).then((response: { toJSON: () => string }) => {
                console.log('Banned', response.toJSON())
            })
        })

        roles.map(roles => {
            Role.create({
                role: roles.role,
            }).then((response: { toJSON: () => string }) => {
                console.log('Role', response.toJSON())
            })
        })


        activitys.map(activitys => {
            Activity.create({
                designation: activitys.designation,
                type: activitys.type,
                valid: activitys.valid,
                active: activitys.active
            }).then((response: { toJSON: () => string }) => {
                console.log('Activity', response.toJSON())
            })
        })

        managers.map(managers => {
            Manager.create({
                manager_id: managers.manager_id,
                activity_id: managers.activity_id,
                function: managers.function,
                practitioner: managers.practitioner,
            }).then((response: { toJSON: () => string }) => {
                console.log('Manager', response.toJSON())
            })
        })

        holidays.map(holidays => {
            Holiday.create({
                datetime: holidays.datetime,
                duration: holidays.duration,
            }).then((response: { toJSON: () => string }) => {
                console.log('Appointement', response.toJSON())
            })
        })


        appointments.map(appointments => {
            Appointment.create({
                date_rdv: appointments.date_rdv,
                duration: appointments.duration,
            }).then((response: { toJSON: () => string }) => {
                console.log('Appointment', response.toJSON())
            })
        })

        time_tables.map(time_tables => {
            Time_table.create({
                start: time_tables.start,
                end: time_tables.end,
            }).then((response: { toJSON: () => string }) => {
                console.log('time_table', response.toJSON())
            })
        })

        time_slots.map(time_slots => {
            Time_slot.create({
                day: time_slots.day,
                start: time_slots.start,
                end: time_slots.end,
                duration: time_slots.duration,
            }).then((response: { toJSON: () => string }) => {
                console.log('time_table', response.toJSON())
            })
        })

        // receives.map(receives=>{
        //     Receive.create({
        //         user_id: receives.user_id,
        //         role_id: receives.role_id,
        //     }).then((response: {toJSON: () => string}) => {
        //         console.log('Receive', response.toJSON())
        //     })
        // })

    })
}
