import { Person } from './components/Person/PersonType';
import { Debt, CalculatedDebts } from './components/Debt/DebtType';

type Lender = {
    person: Person;
    amountLeft: number;
}

export function sortFirstLender(lenders: Lender[]): void {
    // Sort the first lender in the list
    const lenderToSort = lenders[0];
    lenders.splice(0, 1);

    let i = 0;
    while (i < lenders.length && lenders[i].amountLeft > lenderToSort.amountLeft) {
        i++;
    }
    lenders.splice(i, 0, lenderToSort);
}


export function settleUp(persons: Person[]): CalculatedDebts {
    const total: number = persons.reduce((acc, person) => acc + person.contribution, 0);
    const costPerPerson: number = total / persons.length;
    // let debts: Debt[] = [];

    let sortedLenders: Lender[] = persons
        .filter(person => person.contribution > costPerPerson)
        .map(person => ({person: person, amountLeft: person.contribution - costPerPerson}))
        .sort((a, b) => a.amountLeft - b.amountLeft)
        .reverse();

    const borrowers: Person[] = persons.filter(person => person.contribution < costPerPerson);

    let unsettleableDebt: number = 0;
    borrowers.forEach( (borrower) => {
        let borrowerDebt: number = costPerPerson - borrower.contribution;

        while (borrowerDebt > 0) {
            if (sortedLenders.length === 0 || sortedLenders[0].amountLeft <= 0) {
                unsettleableDebt += borrowerDebt;
                break;
            }

            const amountToLend = Math.min(borrowerDebt, sortedLenders[0].amountLeft);

            borrowerDebt -= amountToLend;
            sortedLenders[0].amountLeft -= amountToLend;

            borrower.debts.push({
                lender: sortedLenders[0].person,
                amount: Math.round(amountToLend * 100) / 100
            });

            if (sortedLenders[0].amountLeft <= 0) {
                sortedLenders.shift();
            }
            else{
                sortFirstLender(sortedLenders);
            }
        }
    })
    
    return {
        personsWithSettledDebts: persons,
        unsettleableDebt: Math.round(unsettleableDebt * 100) / 100,
        costPerPerson: Math.round(costPerPerson * 100) / 100
    };
}
