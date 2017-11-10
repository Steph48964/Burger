
$(function() {
  $(".devour").on("click", function(event) {
    var id = $(this).data("id");
    var newBurgerState = {
      devoured: true
    };

    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: newBurgerState
    }).then(
      function() {
        
        location.reload();
      }
    );
  });
  $(".form-add-burger").on("submit", function(event) {
    console.log('form-add-burger submitted')

    event.preventDefault();
    var newBurger = {
      name: $("#name").val().trim(),
      devoured: false
    };
   
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(
      function() {
        console.log("created new burger");

        location.reload();
      }
    );
  });
});
