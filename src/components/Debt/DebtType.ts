import { Person } from '../Person/PersonType';

export type Debt = {
    borrower: Person;
    lender: Person;
    amount: number;
}

export type CalculatedDebts = {
    debts: Debt[];
    unsettleableDebt: number;
}
