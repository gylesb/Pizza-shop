// Business Logic
// Constructor
function Pizza(style, topping, price, id) {
  this.pizzaStyle = style;
  this.pizzaTopping = topping;
  this.pizzaPrice = price;
  this.id = id;
}

// Prototype
Pizza.prototype.cost = function(size) {
  if (size >= 30) {
    alert("It's physically impossible to eat a pizza that big. Please choose a size smaller than 24 inches.");
  } else if (size <= 5) {
    alert("You'll still feel hungry! Choose a bigger pizza");
  } else if (size >= 6) {
    return this.pizzaPrice - 6
  } else if (size <= 29) {
    return this.pizzaPrice
  }
}

// UI Logic
$(document).ready(function() {
  alert(this.pizzaPrice);
  // Creating new objects via Constructor
  var regular= new Pizza("The Regular", "Cheese and Tomato sauce", 13.00, 1);
  var vegan = new Pizza("The Vegan", "Onions, tomatoes, bell peppers, olives, and kale", 13.00, 2);
  var beast = new Pizza("The BEAST", "Pepperoni, bacon, sausage, ham, eggs, and extra cheese", 13.00, 3);
  var yawka = new Pizza("The Yawka", "Cheese, and pepperoni", 13.00, 4);
  var ditka = new Pizza("The Ditka", "Sausage, pepperoni, bacon, and cheese", 13.00, 5);


  var pizzaArray = [regular, vegan, beast, yawka, ditka];

  pizzaArray.forEach(function(pizza) {
    $("select#type").append("<option value="+pizza.id+">"+pizza.pizzaStyle+"</option>");
  });

  pizzaArray.forEach(function(topping) {
    $("select#toppings").append("<option value="+topping.id+">"+topping.pizzaTopping+"</option>");
  });

  // Form Submit
  $("#formOne").submit(function(event) {
    event.preventDefault();
    var pizzaSelect = parseInt($("select#type").val());
    var pizzaSize = parseInt($("input#size").val());
    var price = 13;

    pizzaArray.forEach(function(pizza) {
      if (pizza.id === pizzaSelect) {
        console.log(pizza.pizzaStyle)
        console.log(pizza.pizzaPrice)
        price = pizza.cost(pizzaSize);
      }
    $("#price h2").text("You have chosen "+pizzaSelect+" with extra "+pizza.pizzaTopping+"! ");
    $("#price h1").text("Your price will be $"+price+".00")
    });
  });
});
