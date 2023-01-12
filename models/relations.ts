import { User } from "./users"
import { Activity } from "./activitys"
import { Appointment } from "./appointment"
import { Role } from "./roles"
import { Token } from "./tokens"
import { Location } from "./locations"
import { Holiday } from "./holidays"
import { Time_table } from "./time_table"
import { Time_slot } from "./time_slot"
import { Ban } from "./banneds"
import { Manager } from "./managers"

export const relations = () => {

    User.hasOne(Manager, { onDelete: 'cascade', foreignKey: 'manager_id'})
    Manager.belongsTo(User, {onDelete: 'cascade',foreignKey: "manager_id"})

    Activity.hasMany(Manager, { onDelete: 'cascade', foreignKey: 'activity_id'})
    Manager.belongsTo(Activity, {onDelete: 'cascade',foreignKey: "activity_id"})

    User.belongsToMany(Role, { through: 'receive', foreignKey: 'user_id' })
    Role.belongsToMany(User, { through:'receive', foreignKey: 'role_id'})

    // User.belongsTo(Appointment, {foreignKey: 'user_id', targetKey:'user_id'})
    // Activity.belongsTo(Appointment, {foreignKey: 'activity_id',targetKey:'role_id' })
    
    Appointment.belongsTo(User, {foreignKey:'user_id'})
    Appointment.belongsTo(Activity, {foreignKey:'activity_id'})

    User.hasMany(Token, {foreignKey: 'user_id'})
    Token.belongsTo(User, {foreignKey: "user_id"})

    User.belongsTo(Location, {foreignKey:'location_id'})
    Location.hasMany(User, {foreignKey:'location_id'})

    Activity.belongsTo(Location, {foreignKey:'location_id'})
    Location.hasMany(Activity, {foreignKey:'location_id'})

    Activity.hasMany(Holiday,{foreignKey:'activity_id'})
    Holiday.belongsTo(Activity,{foreignKey:'activity_id'})

    Activity.hasMany(Time_table,{foreignKey:'activity_id'})
    Time_table.belongsTo(Activity,{foreignKey:'activity_id'})

    Time_table.hasMany(Time_slot,{foreignKey:'time_table_id'})
    Time_slot.belongsTo(Time_table,{foreignKey:'time_table_id'})
    
    User.hasOne(Ban,{foreignKey:'banMail'})
    Ban.hasMany(User,{foreignKey:'banMail'})



}