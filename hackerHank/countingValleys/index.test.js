const { countingValleys } = require('./index');

describe('countingValleys', () => {

  it('100 caracteres', () => {
    let n = 100;
    let s = 'DUDUUUUUUUUDUDDUUDUUDDDUUDDDDDUUDUUUUDDDUUUUUUUDDUDUDUUUDDDDUUDDDUDDDDUUDDUDDUUUDUUUDUUDUDUDDDDDDDDD';
    let valleys = countingValleys(n, s);
    expect(valleys).toBe(2);
  });
});

