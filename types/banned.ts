export interface bannedTypes {
  banMail: string;
  reason: string;
}

export interface bannedId extends bannedTypes {

  id: number;

}