/*
You are given an array of a journey in London, UK. The array will contain bus numbers and TFL tube names as strings e.g.

['Northern', 'Central', 243, 1, 'Victoria']
Journeys will always only contain a combination of tube names and bus numbers. Each tube journey costs £2.40 and each bus journey costs £1.50. If there are 2 or more adjacent bus journeys, the bus fare is capped for sets of two adjacent buses and calculated as one bus fare for each set.

Your task is to calculate the total cost of the journey and return the cost rounded to 2 decimal places in the format (where x is a number): £x.xx
*/


const londonCityHacker = (journey) => {
  // Taxas fixas de ônibus e metrô
  const BUS_TAX = 1.5;
  const TUBE_TAX = 2.4;
  // Total de vezes que será pago
  let payedTube = 0;
  let payedBus = 0;

  // para cada transportes da jornada
  for ( let index = 0; index < journey.length; index++) {
    // transporte atual
    let thisTransport = journey[index];
    // se for onibus
    let isBus = typeof thisTransport === 'number';
    // se for metrô
    let isTube = typeof thisTransport === 'string';
    // se existe próximo transporte e se é ônibus
    let existsNextTransportAndIsBus = journey[index+1] && typeof journey[index+1] == 'number';

    // se for metrô
    if ( isTube ) {
      // marca para ser pago
      payedTube++;
      continue;
    }
    
    // se for ônibus
    if ( isBus ) {
      // marca para ser pago
      payedBus++;
      // se o próximo transporte também for um ônibus
      if ( existsNextTransportAndIsBus ) {
        // pula o próximo transporte
        index++;
      }
    }
  }

  // calcula o preço total do metrô
  let tubeTotalPrice = payedTube * TUBE_TAX;
  // calcula o preco total do ônibus
  let busTotalPrice = payedBus * BUS_TAX;
  // calcula o preço total da jornada
  let totalPrice = busTotalPrice + tubeTotalPrice;

  // retorna valor total com 2 casas decimais fixas.
  return `£${ totalPrice.toFixed(2) }`;

}
