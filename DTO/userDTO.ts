export interface userDTO {
    lastname: string,
    firstname: string,    
    mail: string,    
    birthdate: Date | undefined,    
    phone_number: string
    genre: string,
}

export interface userLoginDTO {
    user_id: number,
    mail: string,
    password: string;
}

export interface userFullDTO extends userDTO {
    location: {
        address: string;
        zipCode: number;
        city: string;
    }
}