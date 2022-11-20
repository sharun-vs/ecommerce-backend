import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ProductCreateInput = {
  description?: string | null;
  isActive?: boolean | null;
  name: string;
  price: number;
  user: UserWhereUniqueInput;
};
