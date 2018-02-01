//Business Logic

//Pizza Constructor:
function Pizza(size, toppings) {
  this.size = size;
  this.toppings = toppings;
}

Pizza.prototype.sizeText = function() {
  return " " + this.size;
}

Pizza.prototype.toppingsText = function() {
  return " " + this.toppings;
}
//Price function:
    Pizza.prototype.sizePrice = function() {
      var price = 0;
      if(this.size == "small") {
        price += 10;
      } else if(this.size == "medium") {
        price += 15;
      } else if(this.size == "large") {
        price += 20;
    } if(this.toppings.length == 1) {
        price += 2;
    } else if(this.toppings.length == 2) {
        price += 4;
    } else if(this.toppings.length == 3) {
        price += 6;
    } else if(this.toppings.length == 4) {
        price += 8;
    } else if(this.toppings.length == 5) {
        price += 10;
    } else if(this.toppings.length == 6) {
        price += 12;
    } else if(this.toppings.length == 7) {
        price += 14;
    } else if(this.toppings.length == 8) {
        price += 16;
    } return price;
    }
$(".form-reload").click(function() {
  location.reload();
});
//User Logic Interface
$(document).ready(function() {
      $(".form-size").submit(function(event) {
          event.preventDefault();
          var pizzasizeinput = $("input:radio[name=optionsRadios]:checked").val();
          var toppingsArray = [];
          $('input:checkbox[name=toppings]:checked').each(function() {
            toppingsArray.push(this.value);
          var newPizza = new Pizza(pizzasizeinput, toppingsArray);

          $(".sizeresults").text(newPizza.sizeText());
          $(".toppingsresults").text(newPizza.toppingsText());
          $(".total").text(newPizza.sizePrice());
          });
        });
      });
