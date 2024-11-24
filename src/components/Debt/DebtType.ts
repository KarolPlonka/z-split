import { Person } from '../Person/PersonType';

export type Debt = {
    lender: Person;
    amount: number;
}

export type CalculatedDebts = {
    personsWithSettledDebts: Person[];
    unsettleableDebt: number;
    costPerPerson: number;
}
