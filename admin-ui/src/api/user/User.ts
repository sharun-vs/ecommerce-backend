import { Product } from "../product/Product";
import { JsonValue } from "type-fest";

export type User = {
  createdAt: Date;
  firstName: string | null;
  id: string;
  lastName: string | null;
  products?: Array<Product>;
  roles: JsonValue;
  updatedAt: Date;
  username: string;
};
