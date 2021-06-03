
function switchCase(){
    let a = prompt("guess the COLOR");


    switch (a) {
      case 'red': //performs OR operator
      case 'yellow':
        alert( 'Thats not the right color ;) Try again' );
        break;
      case 'green':
        alert( 'you chose Green color.Thats not the right color ;) Try again' );
        break;
      case 'blue':
        alert( 'Try again :) ' );
        break;
      case 'pink':
        alert( 'Perfect! you chose the right color!!' );
        document.querySelector("h1").innerHTML = "BRAVO!!!"
        break;
      default:
        alert( "Not in the list , try again" );
    }

    
}
