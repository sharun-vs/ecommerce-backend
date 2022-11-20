import { User } from "../user/User";

export type Product = {
  createdAt: Date;
  description: string | null;
  id: string;
  isActive: boolean | null;
  name: string;
  price: number;
  updatedAt: Date;
  user?: User;
};
