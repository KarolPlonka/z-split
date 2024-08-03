import React from 'react';
// import { Person } from './../Person/PersonType';
import { CalculatedDebts } from './DebtType';
import { DebtCard } from './DebtCard';

// import './PersonsContainer.scss';
//
export const DebtsContainer: React.FC<{ calculatedDebts: CalculatedDebts }> = ({ calculatedDebts }) => {
    return (
        <div className='debt-container'>
            <h2>Debts</h2>

            <div className='debt-container__debts-list'>
                {calculatedDebts.debts.map((debt, i) => (
                    <DebtCard debt={debt} key={i} />
                ))}
            </div>
            
            <hr/>

            <div className='debt-container__unsettleable-debt'>
                Cost per person: {calculatedDebts.costPerPerson}
            </div>

            <hr/>
            <div className='debt-container__unsettleable-debt'>
                Unsettleable Debt: {calculatedDebts.unsettleableDebt}
            </div>
        </div>
    );
}


// export const PersonsContainer: React.FC<{ persons: Person[] }> = ({ persons }) => {
//     const [localPersons, setLocalPersons] = useState([...persons]);
//
//     const addPerson = () => {
//         const newPerson = {
//             id: persons.length,
//             name: '',
//             contribution: 0,
//         };
//         persons.push(newPerson);
//         setLocalPersons([...persons]);
//         console.log(persons);
//     };
//
//     const removePerson = (index: number) => {
//         persons.splice(index, 1);
//         setLocalPersons([...persons]);
//     }
//
//
//     return (
//         <div className='persons-container'>
//             <div className='persons-container__persons-list'>
//                 {localPersons.map((person, i) => (
//                     <div className='persons-container__person-card-container' key={i}>
//
//                         <PersonCard person={person} />
//
//                         <button
//                             className='persons-container__remove-person-button' 
//                             onClick={() => removePerson(i)}
//                         >
//                             Remove Person
//                         </button>
//
//                     </div>
//                 ))}
//             </div>
//
//             <button className='persons-container__add-person-button' onClick={addPerson}>Add Person</button>
//         </div>
//     );
// };
