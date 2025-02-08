function rollTheDice(userName: string, maxOfTries: number) {
  const results: string[] = [];
  let MAX_DICE_NUMBER: number;
  MAX_DICE_NUMBER = 6;
   //Elimino los codigos que controlan el tipo de maxOfTries porque ya le de indicado por medio de typescrpt que deben ser de tipo string y no aceptara otra cosa.

  //Elimino los codigos que controlan el tipo de userName porque ya le de indicado por medio de typescrpt que deben ser de tipo string y no aceptara otra cosa

  for (let index = 0; index < maxOfTries; index++) {
    const result = Math.ceil(Math.random() * MAX_DICE_NUMBER);

    if (result === MAX_DICE_NUMBER) {
      results.push(`${userName} is a WINNER`);
    } else {
      results.push(`${userName} is a LOSER`);
    }
  }

  return results;
}

const results = rollTheDice('TypeScript', 2);

console.log(results);
