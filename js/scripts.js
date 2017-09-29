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
  if (size > 30) {
    alert("It's physically impossible to eat a pizza that big. Please choose a size smaller than 24 inches.");
  } else if (size < 5) {
    alert("You'll still feel hungry! Choose a bigger pizza");
  } else if (size >= 6) {
    return this.pizzaPrice - 6
  } else if (size <= 29) {
    return this.pizzaPrice
  }
}

// UI Logic
$(document).ready(function() {
  var regular= new Pizza("The Regular", "Cheese and Tomato sauce", 13, 1);
  var vegan = new Pizza("The Vegan", "Onions, tomatoes, bell peppers, olives, kale", 13, 2);
  var beast = new Pizza("The BEAST", "Pepperoni, bacon, sausage, ham, eggs, extra cheese", 13, 3);
  var yawka = new Pizza("The Yawka", "Cheese, pepperoni", 13, 4);
  var ditka = new Pizza("The Ditka", "Sausage, pepperoni, bacon, cheese", 13, 5);

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
    alert(this.pizzaStyle);
    var pizzaSelect = parseInt($("#type").val());
    var pizzaSize = $("input#size").val();
    var price = 13;

    pizzaArray.forEach(function(pizza) {
      if (pizza.id === pizzaSelect) {
        console.log(pizza.pizzaSize)
        price = pizza.cost(size);
      }
    })



    $("#price h2").append("You have chosen "+this.pizzaStyle+"Which comes with "+this.pizzaTopping);
    $("#price h1").append("Your price will be "+price+".00")

  });
});
