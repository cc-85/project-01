$(() => {
  console.log('JS Loaded');

  let scoreNumber = 0;
  let clickedItem = '';
  const $score = $('.score');
  const $items = $('.item');
  const $plates = $('.plate');
  const $sendOrderButton = $('.send-order');
  const $clearPlateButton = $('.clear-plate');
  const $playAgain = $('.play-again');
  const $tips = $('.tips');
  const $playAgainButton = $('.play-again');
  const $timerScreen = $('.timer');


  //starts timer!
  startTimer();

  //generates an array of sushi at random
  function randomSushiGenerator(){
    const sushiTypes = [
      'tunaNigiri',
      'salmonNigiri',
      'prawnNigiri',
      'tamagoNigiri',
      'tunaMaki'
    ];
    //console.log(sushiTypes);
    const randomNumber = Math.floor(Math.random()* 5);
    //console.log(randomNumber);
    //console.log(sushiTypes[randomNumber]);
    return sushiTypes[randomNumber];
  }


  // adds random sushi selection to bar at top
  function newOrder() {
    $('.character-sushi-selection')
      .find('div').slice(0, 3)
      .removeClass()
      .addClass('character-selection')
      .addClass(randomSushiGenerator);
  }

  newOrder();

  // an item from the menu is clicked and stored in clickedItem variable
  $items.on('click', (e) => {
    clickedItem = $(e.target).attr('class').replace('item ', '');
    //console.log(clickedItem);
  });

  // a plate div is clicked and populated with item stored in clickedItem variable
  $plates.on('click', (e) => {
    $(e.target).removeClass().addClass(`plate ${clickedItem}`);
    //clickedItem = '';
  });



  // function to compare player and character selections
  function winGame() {

    // stores the randomly generated customer order as an array for later comparison
    const characterOrderArray = $('div.character-sushi-selection div.character-selection').map(function() {
      return $(this).attr('class').replace('character-selection ', '');
    }).get();
    //console.log(characterOrderArray);

    // stores the playersSelection as an array for later comparison
    const playerSelectionArray = $('div.player-selection div.plate').map(function() {
      return $(this).attr('class').replace('plate ', '').replace('plate', '');
    }).get();
    const playerSelectionSorted = playerSelectionArray.sort().join('');
    console.log(playerSelectionSorted);
    const characterOrderSorted = characterOrderArray.sort().join('');
    console.log(characterOrderSorted);
    if (playerSelectionSorted === characterOrderSorted) {
      console.log('match!');
      scoreNumber += 1000;
      //console.log(scoreNumber);
      $score.text(scoreNumber);
    } else {
      console.log('fail');
    }

    return playerSelectionSorted === characterOrderSorted;
  }

  // when send order button is clicked, the playersSelection function is fired
  $sendOrderButton.on('click', () => {
    winGame();
    clearPlate();
    randomSushiGenerator();
    newOrder();
  });


  $playAgainButton.on('click', () => {
    clearPlate();
    $playAgain.hide();
    $sendOrderButton.show();
    scoreNumber = 0;
    console.log(scoreNumber);
    $score.text(scoreNumber);
    randomSushiGenerator();
    newOrder();
    $timerScreen.text('30');
    startTimer();
  });







  function startTimer() {
    let currentTime = 30;
    let timerId = 0;

    timerId = setInterval(() => {
      currentTime--;
      $timerScreen.text(currentTime);
      if(currentTime === 0) {
        clearInterval(timerId);
        gameEnd();
      }
    }, 1000);
  }

  function gameEnd() {
    $playAgain.show();
    $sendOrderButton.hide();
    $tips.addClass('tips-end');
  }

  function clearPlate() {
    $plates.removeClass().addClass('plate');
  }

  $clearPlateButton.on('click', () => {
    clearPlate();
  });







});
