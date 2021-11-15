import * as React from "react";
import { Action } from "../actions";
import { ActionType } from "../action-types";
import { createBalanceResource } from "../../queries/fetchBalance";
import { createLatestPriceResource } from "../../queries/fetchLatestPrices";
import { BalanceResource } from "../../resources/BalanceResource";

const initialState = 0;

const reducer = (state: any = initialState, action: Action) => {
  switch (action.type) {
    // case ActionType.DEPOSIT:
    //   return state + action.payload;
    // case ActionType.WITHDRAW:
    //   return state - action.payload;
    case ActionType.BALANCE:
      return 6;
    default:
      return state;
  }
};

export default reducer;
