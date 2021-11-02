const moves = ['north', 'north', 'west', 'west', 'north', 'east','north'];



const finalPosition = function (moves) {
  // Your code in here ...
  let x = 0;
  let y = 0;
  let coords = []
  
  for(let move in moves){
    if(moves[move] === 'north'){
      y++;
    }else if(moves[move] === 'east'){
      x++;
    }else if(moves[move] === 'south'){
      y--;
    }else if(moves[move] === 'west'){
      x--;
    }
  }
  coords[0] = x;
  coords[1] = y;
  return coords;
}

finalPosition(moves);
