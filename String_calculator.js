const Negatives = [];

function String_calculator(numbers) {
  if (numbers.length === 0) return 0;
  const nums = numbers.split(',');
  const answer = nums.reduce((acc, value) => {
    let val = parseInt(value);
    if (val > 1000) {
     val = 0;
    } else if (val < 0) {
      Negatives.push(val);
      return acc;
    }
    return acc + val;
  }, 0)
  if (Negatives.length) throw new Error('negatives not allowed ' + Negatives.join(',') ) ;
  return answer;
}


module.exports = String_calculator;