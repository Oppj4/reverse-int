module.exports = function reverse (initialNum) {
  num = initialNum;

  if(num > 0){
      num = String(num);
  }
  else{
      num *= (-1);
      num = String(num);
  }

  let i = num.length;
  let result = '';

  while(i > 0){
      result = `${result}${num[i-1]}`;
      i--;
  }
  result = Number(result);
  return result;
}
