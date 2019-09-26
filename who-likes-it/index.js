function likes(names) {
  switch(names.length) {
    case 0:
      return 'no one likes this';
    case 1:
      return `${names.shift()} likes this`;
    case 2:
      return `${names.shift()} and ${names.shift()} like this`;
    case 3:
      return `${names.shift()}, ${names.shift()} and ${names.shift()} like this`;
    default:
      return `${names.shift()}, ${names.shift()} and ${names.length} others like this`;
  }
}
