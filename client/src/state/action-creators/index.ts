import { ActionType } from "../action-types";
import { Dispatch } from "redux";
import { Action } from "../actions";

export const getBalance = () => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.BALANCE,
    });
  };
};
