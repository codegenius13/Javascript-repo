(function () {
    'use strict'
    var startGame = document.getElementById("startgame");
    var gameControl = document.getElementById("gamecontrol");
    var game = document.getElementById("game");
    var score = document.getElementById("score");
    var actionArea = document.getElementById("actions");

    var gameData = {
        dice: ['1die.jpg', '2die.jpg', '3die.jpg', '4die.jpg', '5die.jpg',
        '6die.jpg'],
        players: ['players 1', 'player 2'],
        score: [0,0],
        roll1: 0,
        roll2: 0,
        rollSum: 0,
        index: 0,
        gameEnd: 29
    }
    startGame.addEventListener("click", function () {
    gameData.index = Math.round(Math.random());
    gameControl.innerHTML = '<h2>The Game Has Started</h2>';
    gameControl.innerHTML += '<button id="quit">Do you want to quit?</button>';
    
    document.getElementById("quit").addEventListener("click", function () {
        location.reload();
    });
    //console.log("set up turn!");
    setUpTurn();
    });
    function setUpTurn() {
        game.innerHTML = `<p>Roll the dice for ${gameData.players[gameData.index]}</p>`;
        actionArea.innerHTML ='<button id="roll">Roll the Dice</button>';
        document.getElementById("roll").addEventListener("click", function () {
        throwDice();
        });
    };
    function throwDice() {
        actionArea.innerHTML = "";
        gameData.roll1 = Math.floor(Math.random() * 6) + 1;// using cell could result in a zero
        gameData.roll2 = Math.floor(Math.random() * 6) + 1;
        game.innerHTML = `<p>Roll the dice for ${gameData.players[gameData.index]}</p>`;
        game.innerHTML += `<img src="${gameData.dice[gameData.roll1 - 1]}" alt="die">`
        game.innerHTML += `<img src="${gameData.dice[gameData.roll2 - 1]}" alt="die">`;
        gameData.rollSum = gameData.roll1 + gameData.roll2;
        //console.log(gameData.rollSum);
        // if two 1' are rolled 
        if (gameData.rollSum === 2) {
            game.innerHTML += '<p>Oh snap! Snake Eyes<p/>';
            gameData.score[gameData.index] = 0;
            gameData.index ? (gameData.index = 0) : (gameData.index = 1);
            // Show the current score
            showCurrentScore();
            setTimeout(setUpTurn, 2000);
        }
        // if either die is a 1...
        else if (gameData.roll1 === 1 || gameData.roll2 === 1) {
            gameData.index ? (gameData.index = 0) : (gameData.index = 1);
            game.innerHTML += `<p>Sorry, one of your rolls was one, switching to ${gameData.players[gameData.index]}</p>`;
            setTimeout(setUpTurn, 2000);
        }
        else {
            gameData.score[gameData.index] = gameData.score[gameData.index] + gameData.rollSum;
            actionArea.innerHTML = '<button id= "rollagain">Roll again</button> or <button id="pass">Pass</button>';
            document.getElementById("rollagain").addEventListener("click", function () {
            throwDice(); 
            });
            document.getElementById("pass").addEventListener("click", function () {
            gameData.index ? (gameData.index = 0) : (gameData.index = 1); 
            setUpTurn();
            });
            checkWinningCondition();
        }
    }
    function checkWinningCondition() {
        if (gameData.score[gameData.index] > gameData.gameEnd) {
            score.innerHTML = `<h2>${gameData.players[gameData.index]}
            wins with ${gameData.score[gameData.index]} points!</h2>`;
            actionArea.innerHTML = "";
            document.getElementById("quit").innerHTML = "Start a New Game?";
        }  
        else {
            showCurrentScore();
        }
    };
    function showCurrentScore() {
        score.innerHTML = `<p>The score for <strong>${gameData.players[0]}
        is ${gameData.score[0]}</strong> and the score for <strong>${gameData.players[1]}
        is ${gameData.score[1]}</strong></p>`;
    };
})();
