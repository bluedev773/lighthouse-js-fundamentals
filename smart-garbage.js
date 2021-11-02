const smartGarbage = function(type, state){

  if(type === 'recycling'){
    state.recycling++;
  }else if(type === 'waste'){
    state.waste++;
  }else{
    state.compost++;
  }
  return state;
}


smartGarbage('recycling', { waste: 4, recycling: 2, compost: 5 });