const sumLargestNumbers = function(data) {
  let max = 0;
  let secondMax = 0;
  for(let i = 0; i < data.length; i++){
    if(data[i] > max){
      secondMax = max;
      max = data[i];
    }else if(data[i] > secondMax){
      secondMax = data[i];
    }
  }
  return (max + secondMax);
};

console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));