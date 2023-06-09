import {Customer} from '../customer/Customer';
import {Status} from '../status/Status';
import {Employee} from '../employee/Employee';
import {Product} from '../product/Product';

export interface Contract {
  id?: number;
  contractCode?: string;
  beginDate?: string;
  customer?: Customer;
  endDate?: string;
  employee?: Employee;
  status?: Status;
  interest?: number;
  product?: Product;
  isFlag?: boolean;
}
