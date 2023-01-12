import { userDTO } from "../DTO/userDTO";
import { User } from "../models/users";

export class UserMapper {
    static mapToDto(user: User |null): userDTO {
        if (user === null){
            return null as any;
        } 
        const dto : userDTO = {
            lastname: user.lastname,
            firstname: user.firstname,
            genre: user.genre,
            birthdate: user.birthdate,
            mail: user.mail,
            phone_number: user.phone_number
        }

        return dto;
    }
}