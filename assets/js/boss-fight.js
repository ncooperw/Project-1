//boss-fight for project 1 game
//much like rpg game from earlier in the course

//user character stats:
    //hp
    //ap
    //items
        //1
        //2
        //3
    //attack option 

//boss character stats:
    //hp
    //ap
    //attack option 1
    //attack option 2

//boss--text
//How Dare you challange me!?

//prepare to defend yourself!

//boss fight begins

//user can click attack, or choose to use an item
    //items will temporaroliy boost attack power, or heal HP

//if user's HP reaches 0 or below, GAMEOVER

//if Boss's HP reaches zero or below, User Wins!

$(document).on("click", "#continue-to-boss", function () {

    var bossText = $("<div>");
    bossText.attr("id", "boss-story");
    bossText.addClass("boss-paragraph");
    bossText.text("Something russles in the bushes...")
    setTimeout(function(){
        resposiveVoice.speak("Prepare to defnd yourself human!");
        bossText.text("Prepare to defend yourself Human!")
    }, 3000)


    $(".game-container11").append(bossText);

    $("#start-boss").on("click", function(){
        bossfight();
    })
  
})


