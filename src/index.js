module.exports = function zeros(expression) {
  let mulRes = '1';
  expression.split('*').forEach((token) => {
    let factorialSignsLength = token.match(new RegExp('!', 'gi')).length;
    let number = token.substring(0, token.length - factorialSignsLength);
    mulRes = multiply(mulRes, factorial(number, factorialSignsLength > 1));
  })
  mulRes = mulRes.split('').reverse();
  let i = 0;
  while(mulRes[i] === '0') {
    i++;
  }
  return i;
}

function factorial(number, double = false) {
  let accumulator = '1';
  for(let i = parseInt(number) % 2 === 0 ? 2 : 1; i <= parseInt(number); i += double ? 2: 1) {
    accumulator = multiply(accumulator, i.toString());
  }
  return accumulator;
}

// multiply func from additional_4 task
function multiply(first, second) {
  let result = [];

  if(first === '0' || second === '0') {
    return '0';
  }

  first = first.split('').reverse();
  second = second.split('').reverse();

  for(let i = 0; first[i] >= 0; i++) {
    for(let j = 0; second[j] >= 0; j++) {
      if(!result[i + j]) {
         result[i + j] = 0;
      }
      result[i + j] += first[i] * second[j];
      }
    }

  for (let i = 0; result[i] >= 0; i++) {
    if (result[i] >= 10) {
      if (!result[i + 1]) {
          result[i + 1] = 0;
      }
      result[i + 1] += parseInt(result[i] / 10);
      result[i] %= 10;
    }
  }

  return result.reverse().join('');
};
