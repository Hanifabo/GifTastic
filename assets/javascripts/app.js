
var total_second =0;
var t_minutes;

    // this pouplates the buttons on the page
    function  buttonsGenerator() {

        //var topicarrays holds topics
        var topicarrays = ["Tiger","Baboon","Elephant","Horse","Goat","Lion","Fish","Eagle","Dog","Dolphin"];
        for(var i=0; i< topicarrays.length; i++){
            var buttonParrents = $(".displayedButtonsRear");
            var infor = topicarrays[i];
            console.log("data-terms "+ infor);
            // passes the gify details into the data-infor
            var newButtons = $('<input type="button" class ="displayButtons" data-state="not" ' +
                'data-still="not" data-animate ="not" data-terms="'+infor+'" value= " '+infor+'"/>');
            //newButtons.attr('data-searchTerm', infor);
            buttonParrents.append(newButtons);

        }
    }

//this listens to an event on any of the buttons, holds  the ajazCaller function

    function buttonClickFunction(){
        var inputvalue =  $("#inputTerm").val();

        if(!inputvalue ==""){
            var buttonParrents = $(".displayedButtonsRear");
            var newButtons = $('<input type="button" class ="displayButtons  newButtonDislplay" data-state="not" ' +
                'data-still="not" data-animate ="not" data-terms="'+inputvalue+'" value= " '+inputvalue+'"/>');

            newButtons.attr('data-searchTerm', inputvalue);
            buttonParrents.append(newButtons);
            $("#inputTerm").val("");
        }

        $(".newButtonDislplay").on( "click", function() {
            myElement = $(this);
            populatesImaagesOnButtonCLick(myElement);
        });
    }

    // pulls and displays respective gify images onButton click
    function buttonGifyDisplayClickFunction(){

        var buttonsForGify =  $(".displayButtons").val();

        // store specific images statte to this
        var sitll_state ="";
        var animate_state ="";
        var value;


        if(!inputvalue == ""){
            var buttonParrents = $(".displayedButtonsRear");
            var newButtons = $('<input type="button" class ="displayButtons" value = "'+inputvalue+'"/>');
            newButtons.attr('data-searchTerm', inputvalue);
            buttonParrents.append(newButtons);
            $("#inputTerm").val("");
        }


    }

        function populatesImaagesOnButtonCLick(element){
            // display button gify images event listener

                var gify = element.data("terms");
                console.log("THIS IS THE SEARCH TERM "+ gify);

                var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + gify + "&api_key=dc6zaTOxFJmzC&limit=10&rating=pg";

                $.ajax({
                    url: queryURL,
                    method: "GET"
                }).done(function(response) {

                    console.log("THIS IS THE RESPONSE  Data"+response.data);
                    var results = response.data;

                    for (var i = 0; i < results.length; i++) {
                        //var animalDiv =$(".gifboards");

                        var parentDiv =$(".gifboards");
                        var divBox = $("<div class='imagestyle'>");

                        var rating = $("<div class ='rating'>");
                        var rate = $("<span class='rate'>");
                        rate.text("Rating: "+results[i].rating.toUpperCase());

                        var imageBox = $("<div class='image'>");
                        var gifyimge = $("<img class='autoImage'>");

                        //var image = gifyimge.attr("src",results[i].images.fixed_height.url);
                        var image = gifyimge.attr("src",results[i].images.original_still.url);

                        var animate =results[i].images.original.url;
                        gifyimge.attr("data-animate",animate);

                        var still =results[i].images.original_still.url;
                        gifyimge.attr("data-still",still );

                        gifyimge.attr("data-state","still");

                        rating.append(rate);
                        divBox.append(rating);

                        imageBox.append(gifyimge);
                        divBox.append(imageBox);

                        parentDiv.prepend(divBox);
                    }
                    var currentState ="";
                    var stillImage ="";
                    var animation="";
                    // display button gify images event listener
                    $("img").on("click",function(){
                        currentState =  $(this).data("state");
                        animation =  $(this).data("animate");
                        stillImage =  $(this).data("still");

                        var currentState =  $(this).data("state");
                        $(this).addClass("selectedImage");

                        if(currentState.toLowerCase() === "still"){
                            $(this).attr("src",animation);
                            $(this).data("state","animate");
                        }

                        //console.log("THIS IS THE DATA-STATE after setting to animate: "+ $(this).data("state"));
                        else if(currentState.toLowerCase() === "animate"){
                            $(this).attr("src",stillImage);
                            $(this).data("state","still");
                        }

                    });


                });

         }

        $(document).ready(function () {
            buttonsGenerator();

            // adding customer button event listener
            $( "#addButton" ).on( "click", function() {
                buttonClickFunction()
            });

            $(".displayButtons" ).on( "click", function() {
                myElement = $(this);

                populatesImaagesOnButtonCLick(myElement);
            });


        });




