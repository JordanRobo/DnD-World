import { rollDice } from './dice';

export function calculateAmountOfMoney(randomNumber: number): string {
    let amount;
  
    if (randomNumber >= 1 && randomNumber <= 30) {
      const copperPieces = rollDice('5d6');
      amount = `${copperPieces}cp`;
    } else if (randomNumber >= 31 && randomNumber <= 65) {
      const silverPieces = rollDice('4d6');
      amount = `${silverPieces}sp`;
    } else if (randomNumber >= 66 && randomNumber <= 95) {
      const goldPieces = rollDice('3d6');
      amount = `${goldPieces}gp`;
    } else {
      const platinumPieces = rollDice('1d6');
      amount = `${platinumPieces}pp`;
    }
  
    return `Random number ${randomNumber}: ${amount}`;
  }

 
