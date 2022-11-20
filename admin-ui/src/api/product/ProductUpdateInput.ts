import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ProductUpdateInput = {
  description?: string | null;
  isActive?: boolean | null;
  name?: string;
  price?: number;
  user?: UserWhereUniqueInput;
};
