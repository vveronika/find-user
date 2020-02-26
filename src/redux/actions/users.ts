import * as actionTypes from "../actionTypes";
import { User } from "../../models/user";

export default function fetchUsers() {
  return (dispatch: Function) => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        return response;
      })
      .then(response => response.json())
      .then(res => dispatch(fetchUsersSuccess(res)))
      .catch(() => dispatch(fetchUsersFailed(true)));
  };
}

function fetchUsersFailed(failed: boolean) {
  return {
    type: actionTypes.FETCH_USERS_FAILED,
    failed
  };
}

function fetchUsersSuccess(payload: User[]) {
  return {
    type: actionTypes.FETCH_USERS_SUCCESS,
    payload
  };
}
