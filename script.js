//document.ready( function() {
    $('#start').hide();
    $('#player1').hide();
    $('#player2').hide();
    
    
    //  Initialize Firebase
      var config = {
        apiKey: "AIzaSyBt-3iWrieleEbW2DZiauaGf8PdE8fGVPE",
        authDomain: "notorious-rpc.firebaseapp.com",
        databaseURL: "https://notorious-rpc.firebaseio.com",
        projectId: "notorious-rpc",
        storageBucket: "notorious-rpc.appspot.com",
        messagingSenderId: "987140955394"
      };
    
    firebase.initializeApp(config);
    
    var database = firebase.database();
    
    // veriables
    let player1wins = 0;
    let player2wins = 0;
    let player1choice = "";
    let player2choice = "";
    
        // Creates local "temporary" object for holding employee data
      var newGame = {
        player1wins: player1wins,
        player2wins: player2wins,
        player1choice: player1choice,
        player2choice: player2choice,
      };
    
      
      // Uploads new data to the database
      database.ref().set(newGame);
    
    
    // reset player choices
      function resetChoice() {    
    newGame.player1choice = "";
    newGame.player2choice = "";
    database.ref().set(newGame.player1wins);
     database.ref().set(newGame.player2choice);
     database.ref().set(newGame.player1choice);
      };
    
     resetChoice()
    
    //Issue here: on load player1selected is always false.
    let player1selected = false;
    //is it possible to get this to only work if the database is empty?
    database.ref().set(player1selected);
    
    
    //if the start button has already been pressed
    if (database.player1selected === true) {
      //the player is player 2
      $('#player2').show()
    } else {
      // Otherwise allow the player to press start
      $('#start').show();
      $('#start').click(function(){
        player1selected = true;
        $('#start').hide();
       database.ref().set(player1selected);
        //the player is player 1
        $('#player1').show();
      });
    
    };
    
     
    //   // Logs everything to console
    //   console.log(newGame.player1wins);
    //   console.log(newGame.player2wins);
    //   console.log(newGame.player1choice);
    //   console.log(newGame.player2choice);
      
    
    
    function getPlayer2wins() {
    newGame.player2wins ++
    database.ref().set(newGame.player2wins);
    alert("player 2 wins")
    //$('#player2 span').text(newGame.player2wins)
    };
    
    function getPlayer1wins() {
    newGame.player1wins ++
    database.ref().set(newGame.player1wins);
    console.log("Player 1: newGame.player1wins")
    //$('#player1 span').text(newGame.player1wins)
    };
    
    function findWhoWins() {
    // when the choices are the smae
    if (newGame.player1choice = newGame.player2choice) {
      alert("You Tied");
      newGame.player1wins ++;
    //when player 1 has chosen Rock
     } else if (newGame.player1choice === "Rock") {
      if (newGame.player2choice === "Paper") {
        getPlayer2wins() 
      //  } else {
      //  getPlayer1wins() 
    
     }
    
    // //when player 1 has chosen Paper
    //  else if (newGame.player1choice === "Paper") {
    //   if (s.val()newGame.player2choice === "Sizers") {
    //    getPlayer2wins()
    //   } else if (s.val()newGame.player2choice === "Rock") {
    //    getPlayer1wins()
    //   }
    
    // //when player 1 has chosen Sizers
    //   }  else if (newGame.player1choice === "Sizers") {
    //   if (s.val()newGame.player2choice === "Rock") {
    //   getPlayer2wins()
    //   } else if (s.val()newGame.player2choice === "Paper") {
    //   getPlayer1wins()
    //   }
    //   
     }
    resetChoice();
    };
    
    
    $("#player1 .choice").on('click', function(){
      newGame.player1choice = this.textContent
      newGame.player2choice = "Paper"
      database.ref().push(newGame.player1choice);
      database.ref().push(newGame.player2choice);
      findWhoWins()
    });
    
    // $("#player2 .choice").on('click', function(){
    //   player2choice = this.textContent
    //   database.ref().set(newGame.player2choice);
    //   findWhoWins()
    // });
    
    
    
    
    
    //});