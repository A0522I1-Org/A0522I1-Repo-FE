import {Category} from '../category/Category';

export interface Product {
  id?: number;
  name?: string;
  price?: number;
  categoryId?: Category;
  category?:Category;
}
