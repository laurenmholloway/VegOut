// When the doc is ready, the functions in the
// body will run.
$(function () {
    $('#findButton').on('click', function () {
        var searchTerm = $('#veggieInput').val().toLowerCase();
        var listItems = $("li"); //ALL recipes in the list
        var count = listItems.length; //Count how many recipes there are

       
 

        listItems.each(function () {
            if (!$(this).text().toLowerCase().includes(searchTerm)) {
                $(this).fadeOut();
                count -= 1; //If a match isn't found, count subtracts 1
            }
            
            if (count == 0) {
                $('#addItemForm').show(); 
            }
            

        });

    });

    $('#viewAllButton').on('click', function () {
        var listItems = $('li');
       listItems.show();
        $('#addItemForm').hide();
    });

    //add a new recipe to the list
    $('#addRecipeButton').on('click', function () {
        alert("Recipe Added!");
        //get input from user
        var newRecipe = $('#recipeInput').val();
        $('ul').append('<li class="list-group-item">' + newRecipe + '</li>');
        var listItems = $('li');
        listItems.show();
        $('#addItemForm').hide();

    });




//START OF AJAX/JSON LESSON
    $.getJSON("recipes.json", function (data) {
        //Grab the names of the recipes and list them in recipe list
        $.each(data.recipes, function (key, val) {
            var recipeName = val.name;
            $('ul:first').append('<li class="list-group-item">' + recipeName + '</li>');

        });

        //click on a recipe name, show the other details
        $('.list-group-item').on('click', function () {
            var recipeName = $(this).text();
            $.each(data.recipes, function (key, val) {
                if (recipeName == val.name) {
                    //update heading
                    $('#recipeName').replaceWith("<h1 id='recipeName'>" + recipeName + "</h1>");
                    //update description
                    var directions = val.directions;
                    alert(directions);
                    $('#directions').replaceWith("<p>" + directions + "</p>");
                    //update ingredients
                    //var ingredients = val.ingredients;
                    //$.each(ingredients, function () {
                    //    alert($(this));
                    //});
                }


            });
        });
    });








});