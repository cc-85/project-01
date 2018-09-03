$(() => {
  console.log('JS Loaded');

  let scoreNumber = 0;
  let clickedItem = '';
  let currentLevel = 1;
  const $score = $('.score');
  const $items = $('.item');
  const $plates = $('.plate');
  const $sendOrderButton = $('.send-order');
  const $clearPlateButton = $('.clear-plate');
  const $tips = $('.tips');
  const $nextLevelButton = $('.next-level');
  const $playAgainButton = $('.play-again');
  const $timerScreen = $('.timer');
  const $level = $('.level');


  //starts timer!
  startTimer(10);

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
  function newOrder(orderSize) {
    $('.character-sushi-selection')
      .find('div').slice(0, orderSize)
      .removeClass()
      .addClass('character-selection')
      .addClass(randomSushiGenerator);
  }

  newOrder(3);

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
    if (currentLevel === 1) {
      newOrder(3);
    } else if (currentLevel === 2) {
      newOrder(6);
    } else if (currentLevel === 3) {
      newOrder(10);
    }
  });

  $nextLevelButton.on('click', () => {
    //scoreNumber = 0;
    clearPlate();
    $nextLevelButton.hide();
    $sendOrderButton.show();
    console.log(scoreNumber);
    $score.text(scoreNumber);
    randomSushiGenerator();

    currentLevel++;
    console.log(currentLevel);

    if (currentLevel === 1) {
      $level.text(currentLevel);
      newOrder(3);
      $timerScreen.text('30');
      startTimer(30);
    } else if (currentLevel === 2) {
      $level.text(currentLevel);
      newOrder(6);
      $timerScreen.text('45');
      startTimer(45);
    } else if (currentLevel === 3) {
      $level.text(currentLevel);
      newOrder(10);
      $timerScreen.text('60');
      startTimer(60);
    }
  });



  $playAgainButton.on('click', () => {
    clearPlate();
    $playAgainButton.hide();
    $sendOrderButton.show();
    scoreNumber = 0;
    console.log(scoreNumber);
    $score.text(scoreNumber);
    randomSushiGenerator();
  });


  function startTimer(startTime) {
    let currentTime = startTime;
    let timerId = 0;

    timerId = setInterval(() => {
      currentTime--;
      $timerScreen.text(currentTime);
      if(currentTime === 0) {
        clearInterval(timerId);
        if(currentLevel === 1) {
          $sendOrderButton.hide();
          $nextLevelButton.show();
        } else if (currentLevel === 2) {
          $sendOrderButton.hide();
          $nextLevelButton.show();
        } else if (currentLevel === 3) {
          gameEnd();
        }
      }
    }, 1000);
  }


  function gameEnd() {
    $playAgainButton.show();
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
