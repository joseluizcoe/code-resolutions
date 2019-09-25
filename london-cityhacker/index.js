const londonCityHacker = (journey) => {
  const BUS_TAX = 1.5;
  const TUBE_TAX = 2.4;
  let payedTube = 0;
  let payedBus = 0;

  for ( let index = 0; index < journey.length; index++) {
    let thisTransport = journey[index];
    let isBus = typeof thisTransport === 'number';
    let isTube = typeof thisTransport === 'string';
    let existsNextTransportAndIsBus = journey[index+1] && typeof journey[index+1] == 'number';

    if (isTube) {
      payedTube++;
      continue;
    }
    
    if (isBus) {
      payedBus++;
      if ( existsNextTransportAndIsBus ) {
        index++;
      }
    }
  }

  let tubeTotalPrice = payedTube * TUBE_TAX;
  let busTotalPrice = payedBus * BUS_TAX;
  let totalPrice = busTotalPrice + tubeTotalPrice;

  return `£${ totalPrice.toFixed(2) }`;
}
