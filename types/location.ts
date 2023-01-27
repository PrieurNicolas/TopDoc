export interface locationTypes {
    address: string;
    zip_code: number;
    city: string;
  }
  
  export interface locationId extends locationTypes {
  
    id: number;
  
  }