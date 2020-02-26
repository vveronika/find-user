import { User } from "./user";

export interface RootState {
  users: {
    users: User[];
  };
}
