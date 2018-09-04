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
  const $nextLevelButton = $('.next-level');
  const $playAgainButton = $('.play-again');
  const $startGameButton = $('.start-game');
  const $startPage = $('.start-page');
  const $endPage = $('.end-page');
  const $mainPage = $('main');

  const $timerScreen = $('.timer');
  const $level = $('.level');
  const sushiTypes = [
    'tunaNigiri',
    'salmonNigiri',
    'prawnNigiri',
    'tamagoNigiri',
    'tunaMaki',
    'salmonVegMaki',
    'ikuraRoll',
    'tunaTemaki',
    'tunaSashimi',
    'prawns',
    'wasabi',
    'pickledGinger',
    'soySauce',
    'misoSoup',
    'yakisoba',
    'shuCreams',
    'purin'
  ];


  $startGameButton.on('click', () => {
    //starts timer!
    startTimer();
    $startPage.hide();
    $mainPage.show();
    newOrder();
  });



  //generates an array of sushi at random
  function randomSushiGenerator(){
    //console.log(sushiTypes);
    const randomNumber = Math.floor(Math.random()* 17);
    //console.log(randomNumber);
    //console.log(sushiTypes[randomNumber]);
    return sushiTypes[randomNumber];
  }


  // adds random sushi selection to bar at top
  function newOrder() {
    let orderSize = 0;
    if (currentLevel === 1) {
      orderSize = 3;
    } else if (currentLevel === 2) {
      orderSize = 6;
    } else if (currentLevel === 3) {
      orderSize = 10;
    }
    $('.character-sushi-selection')
      .find('div')
      .removeClass(sushiTypes.join(' '))
      .slice(0, orderSize)
      .addClass(randomSushiGenerator);
  }

  // function to compare player and character selections
  function winGame() {

    // stores the randomly generated customer order as an array for later comparison
    const characterOrderArray = $('div.character-sushi-selection div').map(function() {
      return $(this).attr('class');
    }).get();
    //console.log(characterOrderArray);

    // stores the playersSelection as an array for later comparison
    const playerSelectionArray = $('div.player-selection div.plate').map(function() {
      return $(this).attr('class').replace('plate', '').replace('ui-droppable', '').replace('ui-draggable', '').replace('ui-draggable-dragging', '').trim();
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

  $nextLevelButton.on('click', () => {
    //scoreNumber = 0;
    clearPlate();
    $nextLevelButton.hide();
    $sendOrderButton.show();
    console.log(scoreNumber);
    $score.text(scoreNumber);
    randomSushiGenerator();
    currentLevel++;
    $level.text(currentLevel);
    newOrder();
    startTimer();
  });

  $playAgainButton.on('click', reset);


  function reset() {
    $mainPage.show();
    $endPage.hide();
    clearPlate();
    currentLevel = 1;
    $level.text(currentLevel);
    scoreNumber = 0;
    $score.text(scoreNumber);
    console.log(currentLevel);
    newOrder();
    startTimer();
  }


  function startTimer() {

    let currentTime = (currentLevel * 5) + 5;

    $timerScreen.text(currentTime);
    let timerId = 0;

    timerId = setInterval(() => {
      currentTime--;
      $timerScreen.text(currentTime);
      if(currentTime === 0) {
        clearInterval(timerId);
        if(currentLevel < 3) {
          $sendOrderButton.hide();
          $nextLevelButton.show();
        } else {
          gameEnd();
        }
      }
    }, 1000);
  }


  function gameEnd() {
    $mainPage.hide();
    $endPage.css('display', 'flex');
    $playAgainButton.show();
  }

  function clearPlate() {
    $plates.removeClass().addClass('plate');
  }

  $clearPlateButton.on('click', clearPlate);


  $items.draggable({
    revert: true,
    revertDuration: 0
  });

  $plates.droppable({
    drop(e, ui) {
      const className = ui.draggable.find('div').attr('class');
      $(this).addClass(className);
    }
  });

});
