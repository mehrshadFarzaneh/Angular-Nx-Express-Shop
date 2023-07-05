import { CategoryModel } from "../../../../../category/src/lib/data-access/models/category.model";

export interface ProductModel {
  id?: string;
  name?: string;
  description?: string;
  richDescription?: string;
  image?: string;
  images?: string[],
  brand?: string
  category?: CategoryModel | string;
  price?: number;
  countInStock?: number;
  rating?: number;
  numReviews?: number;
  isFeatured?: boolean;
  dateCreated?: Date;
}
