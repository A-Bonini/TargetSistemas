const func = (number) => {
  let value = [0,1];

  while(value[0]+value[1] < number){
    let sum = value[0] + value[1];
    value[0] = value[1];
    value[1] = sum;

    if(value[0]+value[1] == number){
      return `o numero ${number} pertence a sequencia`;
    }
  }

  return `o numero ${number} não pertence a sequencia`;
}
