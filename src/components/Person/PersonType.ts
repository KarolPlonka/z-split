import { Debt } from '../Debt/DebtType';

export type Person = {
    id: number;
    name: string;
    contribution: number;
    debts: Debt[];
    areDebtsSettled: boolean;
}
