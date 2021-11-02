const range = function(start, end, step){
  let steps = [];
  if(start === undefined || end === undefined || step === undefined){
    return steps;
  } else if (start > end){
    return steps;
  }else if(step <= 0){
    return steps;
  }else{
    let i = start;
    while(i <= end){
      steps.push(i);
      i = i + step;
    }
  }
  return steps;
}

console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));