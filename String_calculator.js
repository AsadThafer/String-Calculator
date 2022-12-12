
function String_calculator(numbers) {
  if (numbers.length === 0) return 0;
  const nums = numbers.split(',');
  const answer = nums.reduce((acc, value) => {
    let val = parseInt(value);
    return acc + val;
  }, 0)
    return answer;
}

module.exports = String_calculator;