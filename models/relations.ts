import { User } from "../models/users"
import { Activity } from "./activitys"
import { Appointment } from "./appointment"
import { Role } from "./roles"

export const relations = () => {

    User.belongsToMany(Role, { through: 'receive', foreignKey: 'user_id' })
    Role.belongsToMany(User, { through:'receive', foreignKey: 'role_id'})

    User.belongsTo(Appointment, {foreignKey: 'user_id', targetKey:'user_id'})
    Activity.belongsTo(Appointment, {foreignKey: 'activity_id',targetKey:'role_id'})

}