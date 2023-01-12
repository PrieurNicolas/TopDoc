export interface userTypes {
  mail: string;
  phone_number: string;
  password: string;
  loc_id: number;
  firstname: string;
  lastname: string;
  genre: string;
  birthdate: Date;
}


export interface userId extends userTypes {

  id: number;

}