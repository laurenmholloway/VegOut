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
    xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {

            var jcontent = xmlhttp;
            console.log(jcontent);

        }
    }
    xmlhttp.open("POST", "recipes.json", true);
    xmlhttp.setRequestHeader("Content-type", "application/json");
    xmlhttp.send(null);







});