

let placesMoved = [];
let computerPlacesMoved = [];

function onClick(id){
  button = document.querySelector('.js-button-' + id.toString());
 console.log("This one: " + computerFindThreeInARow());
  if(button.innerText === "" && findThreeInARow() === false && computerFindThreeInARow() === false){
    console.log(button);
  button.innerText = "X";
  placesMoved.push(id)
  findThreeInARow();
  if(findThreeInARow() === false && computerFindThreeInARow() === false){
  computerMove();
  }
  }


  if(computerFindThreeInARow() === true){
    document.querySelector('.js-winner').innerText = "Winner: Computer.   Refresh page to play again."
  }else if(findThreeInARow() === true){
    document.querySelector('.js-winner').innerText = "Winner: Player.     Refresh page to play again."
  }
}

function computerMove(){
  let rand = Math.random();

  if(rand <= 1/5){
  for(let i = 1; i < 9; i++){
   
      if(document.querySelector('.js-button-' + i.toString()).innerText === ""){
        document.querySelector('.js-button-' + i.toString()).innerText = 'O';
        computerPlacesMoved.push(i);
        break;
      }
    
  }
} else if(rand <= 2/5){
  for(let i = 9; i > 1; i--){
   
      if(document.querySelector('.js-button-' + i.toString()).innerText === ""){
        document.querySelector('.js-button-' + i.toString()).innerText = 'O';
        computerPlacesMoved.push(i);
        break;
      }
    
  }
} else if(rand <= 3/5){

  for(let i = 4; i < 13; i++){

            if(i <= 9){
              if(document.querySelector('.js-button-' + i.toString()).innerText === ""){
                document.querySelector('.js-button-' + i.toString()).innerText = 'O';
                computerPlacesMoved.push(i);
                break;
              }
            } else {
              console.log('.js-button-' + (i - 9).toString());
                if(document.querySelector('.js-button-' + (i - 9).toString()).innerText === ""){
                document.querySelector('.js-button-' + (i - 9).toString()).innerText = 'O';
                computerPlacesMoved.push(i);
                break;
              }
            }

}


} else if(rand <= 4/5){

       for(let i = 6; i < 13; i++){

      if(i <= 9){
        if(document.querySelector('.js-button-' + i.toString()).innerText === ""){
          document.querySelector('.js-button-' + i.toString()).innerText = 'O';
          computerPlacesMoved.push(i);
          break;
        }
      } else {
        console.log('.js-button-' + (i - 9).toString());
          if(document.querySelector('.js-button-' + (i - 9).toString()).innerText === ""){
          document.querySelector('.js-button-' + (i - 9).toString()).innerText = 'O';
          computerPlacesMoved.push(i);
          break;
        }
      }

      }

}else if(rand <= 5/5){

    for(let i = 3; i < 13; i++){

    if(i <= 9){
    if(document.querySelector('.js-button-' + i.toString()).innerText === ""){
      document.querySelector('.js-button-' + i.toString()).innerText = 'O';
      computerPlacesMoved.push(i);
      break;
    }
    } else {
    console.log('.js-button-' + (i - 9).toString());
      if(document.querySelector('.js-button-' + (i - 9).toString()).innerText === ""){
      document.querySelector('.js-button-' + (i - 9).toString()).innerText = 'O';
      computerPlacesMoved.push(i);
      break;
    }
    }

    }

    }

}


function findThreeInARow(){
  let result = false;
  console.log(placesMoved.length);
  console.log(placesMoved);
  for(let i = 0; i < placesMoved.length; i++){
    for(let j = 0; j < placesMoved.length; j++){
      for(let k = 0; k < placesMoved.length; k++){
        console.log(i);
        console.log(j);
        console.log(k);
    if(placesMoved[i] === 1 && placesMoved[j] === 2 && placesMoved[k] ===3){
      result = true;
    }
    if(placesMoved[i] === 4 && placesMoved[j] === 5 && placesMoved[k]===6){
      result = true;
    }
    if(placesMoved[i] === 7 && placesMoved[j] === 8 && placesMoved[k]===9){
      result = true;
    }
    

    if(placesMoved[i] === 1 && placesMoved[j] === 4 && placesMoved[k]===7){
      result = true;
    }
    if(placesMoved[i] === 2 && placesMoved[j] === 5 && placesMoved[k]===8){
      result = true;
    }
    if(placesMoved[i] === 3 && placesMoved[j] === 6 && placesMoved[k]===9){
      result = true;
    }

    if(placesMoved[i] === 1 && placesMoved[j] === 5 && placesMoved[k]===9){
      result = true;
    }
    if(placesMoved[i] === 3 && placesMoved[j] === 5 && placesMoved[k]=== 7){
      result = true;
    }


  }
    
  }
    
  }

  return result;
}






function computerFindThreeInARow(){
  let result = false;
  console.log(computerPlacesMoved.length);
  console.log(computerPlacesMoved);
  for(let i = 0; i < computerPlacesMoved.length; i++){
    for(let j = 0; j < computerPlacesMoved.length; j++){
      for(let k = 0; k < computerPlacesMoved.length; k++){
        console.log(i);
        console.log(j);
        console.log(k);
    if(computerPlacesMoved[i] === 1 && computerPlacesMoved[j] === 2 && computerPlacesMoved[k] ===3){
      result = true;
    }
    if(computerPlacesMoved[i] === 4 && computerPlacesMoved[j] === 5 && computerPlacesMoved[k]===6){
      result = true;
    }
    if(computerPlacesMoved[i] === 7 && computerPlacesMoved[j] === 8 && computerPlacesMoved[k]===9){
      result = true;
    }
    

    if(computerPlacesMoved[i] === 1 && computerPlacesMoved[j] === 4 && computerPlacesMoved[k]===7){
      result = true;
    }
    if(computerPlacesMoved[i] === 2 && computerPlacesMoved[j] === 5 && computerPlacesMoved[k]===8){
      result = true;
    }
    if(computerPlacesMoved[i] === 3 && computerPlacesMoved[j] === 6 && computerPlacesMoved[k]===9){
      result = true;
    }

    if(computerPlacesMoved[i] === 1 && computerPlacesMoved[j] === 5 && computerPlacesMoved[k]===9){
      result = true;
    }
    if(computerPlacesMoved[i] === 3 && computerPlacesMoved[j] === 5 && computerPlacesMoved[k]=== 7){
      result = true;
    }


  }
    
  }
    
  }

  return result;
}
