import { ActionType } from "../action-types/index";

// interface DepositAction {
//   type: ActionType.DEPOSIT;
//   payload: number;
// }

// interface WithdrawAction {
//   type: ActionType.WITHDRAW;
//   payload: number;
// }

interface BalanceAction {
  type: ActionType.BALANCE;
}

//export type Action = DepositAction | WithdrawAction | BalanceAction;
export type Action = BalanceAction;
