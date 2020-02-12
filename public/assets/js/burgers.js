$(document).ready(function() {
    // Adding a click event listener to submitButton
    $(document).on("click", "#submitButton", submitBurger);

    $(document).on("click", ".burgerBtn", eatBurger);
    
});

// adding a new burger
function submitBurger() {
    event.preventDefault();

    let newName = $("#inputBurger").val().trim();
    // console.log("newName is " + newName);

    let postData = {
        name: newName
    };

    // Send the POST request.
    $.ajax("/api/new", {
      type: "POST",
      data: postData
    }).then(
      function() {
        // Reload the page to get the updated list
        location.reload();
      }
    );


}

function eatBurger() {
    event.preventDefault();

    // get the dataHour of the specific saveBtn that was clicked
    let dataID = $(this).attr("dataID");

    // set the burger to be eaten
    let data = {
        devoured: true
    }

    // Send the PUT request.
    $.ajax("/api/update/" + dataID, {
      type: "PUT",
      data: data
    }).then(
      function() {
        // Reload the page to get the updated list
        location.reload();
      }
    );

}