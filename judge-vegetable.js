const vegetables = [
  {
    submitter: 'Old Man Franklin',
    redness: 10,
    plumpness: 5
  },
  {
    submitter: 'Sally Tomato-Grower',
    redness: 2,
    plumpness: 8
  },
  {
    submitter: 'Hamid Hamidson',
    redness: 4,
    plumpness: 3
  }
]

const metric = 'redness'

const judgeVegetable = function(veg, met){
  let max = 0;
  let submit = '';
  for(let vegy in veg){
    if(veg[vegy][met] > max){
      max = veg[vegy][met];
      submit = veg[vegy].submitter;
    }
  }
  return submit;
}

console.log(judgeVegetable(vegetables, metric));