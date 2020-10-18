module.exports = function toReadable (number) {
  const numbers = new Map(
      [
          [0, "zero"],
          [1, "one"],
          [2, "two"],
          [3, "three"],
          [4, "four"],
          [5, "five"],
          [6, "six"],
          [7, "seven"],
          [8, "eight"],
          [9, "nine"],
          [10, "ten"],
          [11, "eleven"],
          [12, "twelve"],
          [13, "thirteen"],
          [14, "fourteen"],
          [15, "fifteen"],
          [16, "sixteen"],
          [17, "seventeen"],
          [18, "eighteen"],
          [19, "nineteen"],
          [20, "twenty"],
          [30, "thirty"],
          [40, "forty"],
          [50, "fifty"],
          [60, "sixty"],
          [70, "seventy"],
          [80, "eighty"],
          [90, "ninety"],
      ]
  )
    let newNumber = number;
    let result = "";
    if (Math.trunc(newNumber / 100) > 0) {
        result = result.concat(numbers.get(Math.trunc(newNumber / 100)), " hundred ");
        newNumber = newNumber % 100;
    };
    if (Math.trunc(newNumber / 10) > 1) {
        result = result.concat(numbers.get(Math.trunc(newNumber / 10) * 10), " ");
        newNumber = newNumber % 10;
    } else if (Math.trunc(newNumber / 10) === 1) {
        result = result.concat(numbers.get(newNumber), " ");
        return result.trim();
    }
    if (newNumber || number === 0) {
        result = result.concat(numbers.get(newNumber), " ");
    }
    return result.trim();
}
