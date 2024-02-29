export declare namespace ICommon {
  export interface User {
    id: number;
    name: string;
    datetime: Date;
    user_other_infos: {
      id: number;
      user_id: number;
      info1: string;
      info2: string;
    }[];
  }
}