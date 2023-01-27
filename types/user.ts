export interface userTypes {
  mail: string;
  phone_number: string;
  password: string;
  id: number;
  firstname: string;
  lastname: string;
  genre: string;
  birthdate: Date;
}


export interface userId extends userTypes {

  id: number;

}