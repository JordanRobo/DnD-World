export function rollDice(diceNotation: string): number {
    const parts = diceNotation.split('d');
    if (parts.length !== 2) throw new Error('Invalid dice notation');
  
    const quantity = parseInt(parts[0], 10);
    const faces = parseInt(parts[1], 10);
    if (isNaN(quantity) || isNaN(faces)) throw new Error('Invalid dice notation');
  
    let sum = 0;
    for (let i = 0; i < quantity; i++) {
      sum += Math.floor(Math.random() * faces) + 1;
    }
  
    return sum;
  }
