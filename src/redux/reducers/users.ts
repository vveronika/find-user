import { FETCH_USERS_SUCCESS } from "../actionTypes";
import { User } from "../../models/user";

export interface FetchUsersSuccessAction {
  type: "FETCH_USERS_SUCCESS";
  payload: User[];
}

export type UsersActions = FetchUsersSuccessAction;

const initialState = {
  users: []
};

const reducer = (state = initialState, action: UsersActions) => {
  switch (action.type) {
    case FETCH_USERS_SUCCESS:
      return {
        ...state,
        users: action.payload
      };
    default:
      return state;
  }
};

export default reducer;
