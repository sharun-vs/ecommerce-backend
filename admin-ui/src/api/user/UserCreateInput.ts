import { ProductCreateNestedManyWithoutUsersInput } from "./ProductCreateNestedManyWithoutUsersInput";
import { InputJsonValue } from "../../types";

export type UserCreateInput = {
  firstName?: string | null;
  lastName?: string | null;
  password: string;
  products?: ProductCreateNestedManyWithoutUsersInput;
  roles: InputJsonValue;
  username: string;
};
