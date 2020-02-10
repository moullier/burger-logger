$(document).ready(function() {
    // Adding a click event listener to submitButton
    $(document).on("click", "#submitButton", submitBurger);

    $(document).on("click", ".burgerBtn", eatBurger);
    
});


function submitBurger() {
    event.preventDefault();

    console.log("submitBurger function is hit");

    let newName = $("#inputBurger").val().trim();
    console.log("newName is " + newName);

    let postData = {
        name: newName
    };

    // Send the POST request.
    $.ajax("/api/new", {
      type: "POST",
      data: postData
    }).then(
      function() {
        console.log("maybe it worked?");
        // Reload the page to get the updated list
        location.reload();
      }
    );


}

function eatBurger() {
    event.preventDefault();

    // get the dataHour of the specific saveBtn that was clicked
    let dataID = $(this).attr("dataID");

    console.log("dataID of burger that we're eventually going to eat = " + dataID)

    let data = {
        devoured: true
    }

    // Send the PUT request.
    $.ajax("/api/update/" + dataID, {
      type: "PUT",
      data: data
    }).then(
      function() {
        console.log("did we update successfully?  who knows");
        // Reload the page to get the updated list
        location.reload();
      }
    );

}