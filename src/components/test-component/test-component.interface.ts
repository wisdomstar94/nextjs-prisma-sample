import { ICommon } from '@/interfaces/common.interface';

export declare namespace ITestComponent {
  export interface Props {
    getItems: () => Promise<ICommon.User[]>;
  }
}

