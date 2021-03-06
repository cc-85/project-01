$(() => {
  let scoreNumber = 0;
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
  const $finalScore = $('.final-score');
  const $mobileLandscapeNotification = $('.mobile-landscape-notification');
  const $timerScreen = $('.timer');
  const $level = $('.level');
  const correct = document.querySelector('audio.correct');
  const incorrect = document.querySelector('audio.incorrect');
  const whistle = document.querySelector('audio.whistle');
  const pop = document.querySelector('audio.pop');
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

  //generates an array of sushi at random
  function randomSushiGenerator(){
    const randomNumber = Math.floor(Math.random()* 17);
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

  function clearOrder() {
    $('.character-sushi-selection')
      .find('div')
      .removeClass(sushiTypes.join(' '));
  }

  // function to compare player and character selections
  function winGame() {
    // stores the randomly generated customer order as an array for later comparison
    const characterOrderArray = $('div.character-sushi-selection div').map(function() {
      return $(this).attr('class');
    }).get();
    // stores the playersSelection as an array for later comparison
    const playerSelectionArray = $('div.player-selection div.plate').map(function() {
      return $(this).attr('class').replace('plate', '').replace('ui-droppable', '').replace('ui-draggable', '').replace('ui-draggable-dragging', '').trim();
    }).get();
    const playerSelectionSorted = playerSelectionArray.sort().join('');
    const characterOrderSorted = characterOrderArray.sort().join('');
    if ((playerSelectionSorted === characterOrderSorted) && (currentLevel === 1)) {
      scoreNumber += 1000;
      $score.text(scoreNumber);
      correct.play();
    } else if  ((playerSelectionSorted === characterOrderSorted) && (currentLevel === 2)) {
      scoreNumber += 1500;
      $score.text(scoreNumber);
      correct.play();
    } else if  ((playerSelectionSorted === characterOrderSorted) && (currentLevel === 3)) {
      scoreNumber += 2000;
      $score.text(scoreNumber);
      correct.play();
    } else {
      incorrect.play();
    }
  }

  function nextLevelRefresh() {
    clearPlate();
    $nextLevelButton.hide();
    $sendOrderButton.show();
    $score.text(scoreNumber);
    randomSushiGenerator();
    currentLevel++;
    $level.text(currentLevel);
    newOrder();
    startTimer();
  }

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
    let currentTime = (currentLevel * 2) * 10;
    $timerScreen.text(currentTime);
    let timerId = 0;
    timerId = setInterval(() => {
      currentTime--;
      $timerScreen.text(currentTime);
      if(currentTime === 0) {
        clearInterval(timerId);
        whistle.play();
        clearOrder();
        if(currentLevel < 3) {
          $sendOrderButton.hide();
          $nextLevelButton.show();
          clearPlate();
        } else {
          endGame();
        }
      }
    }, 1000);
  }

  function endGame() {
    $mainPage.hide();
    $endPage.css('display', 'flex');
    $playAgainButton.show();
    $finalScore.text('Your final score was ¥' + scoreNumber);
  }

  function clearPlate() {
    $plates.removeClass().addClass('plate');
  }

  $startGameButton.on('click', () => {
    startTimer();
    $startPage.hide();
    $mainPage.show();
    newOrder();
  });

  // when send order button is clicked, the playersSelection function is fired
  $sendOrderButton.on('click', () => {
    winGame();
    clearPlate();
    randomSushiGenerator();
    newOrder();
  });

  $nextLevelButton.on('click', nextLevelRefresh);

  $playAgainButton.on('click', reset);

  $clearPlateButton.on('click', clearPlate);

  if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    // an item from the menu is clicked and stored in clickedItem variable
    let clickedItem = '';
    $items.on('touchstart', (e) => {
      e.preventDefault();
      clickedItem = $(e.target).attr('class').replace('item ', '');
    });

    // a plate div is clicked and populated with item stored in clickedItem variable
    $plates.on('touchstart', (e) => {
      e.preventDefault();
      $(e.target).removeClass().addClass(`plate ${clickedItem}`);
      pop.play();
    });
  } else {
    $items.draggable({
      revert: true,
      revertDuration: 0
    });

    $plates.droppable({
      drop(e, ui) {
        const className = ui.draggable.find('div').attr('class');
        $(this).addClass(className);
        pop.play();
      }
    });
  }

  if (window.matchMedia('(orientation: portrait)').matches) {
    $mobileLandscapeNotification.show();
  }

});
