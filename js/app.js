$(() => {
  console.log('JS Loaded');

  let clickedItem = '';

  const $items = $('.item');

  const $plates = $('.plate');

  //const $characterSelections = $('.character-selection');

  function randomSushiGenerator(){
    const sushiTypes = [
      'redSushi',
      'greenSushi',
      'purpleSushi',
      'yellowSushi',
      'blueSushi'
    ];
    const randomNumber = Math.floor(Math.random()* 5);
    console.log(randomNumber);
    console.log(sushiTypes[randomNumber]);
    return sushiTypes[randomNumber];
  }

  $('.character-sushi-selection')
    .find('div').slice(0, 3)
    .addClass(randomSushiGenerator);

//   $( "ul li" ).addClass(function( index ) {
//   return "item-" + index;
// });


  // --------------------------


  $items.on('click', (e) => {
    clickedItem = $(e.target).attr('class').replace('item ', '');
    console.log(clickedItem);
  });

  $plates.on('click', (e) => {
    $(e.target).addClass(clickedItem);
    clickedItem = '';
  });


  // $characterSelections



  // const playerSelectionSquares = document.querySelectorAll('.player-selection')
  //
  // playerSelectionSquares.forEach(el => el.addEventListener('input', functionThatDoesStuff))

});
