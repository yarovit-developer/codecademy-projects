const menu = {
  _meal: '',
  _price: 0,

   // Setter for the meal property
  set meal(mealToCheck) {
    // Check if mealToCheck is a string
    if (typeof mealToCheck === 'string') {
       // If true, assign the value to the _meal property
      return this._meal = mealToCheck;
    }
  },
  
  // Setter for the price property
  set price(priceToCheck) {
    // Check if priceToCheck is a number
    if (typeof priceToCheck === 'number') {
      // If true, assign the value to the _price property
      this._price = priceToCheck;
    }
  },

  // Getter for todaysSpecial property
  get todaysSpecial() {
    // Check if both _meal and _price have truthy values
    if (this._meal && this._price) {
     // If both are truthy, return the special of the day
      return `Today's Special: ${this._meal} for ${this._price} dollars!`;
    } else {
      // If either is falsy, return an error message
      return 'Meal or price was not set correctly!';
    }
  }
};

// Set the _meal to a valid string value
menu.meal = 'burger';
// Set the _price to a valid number
menu.price = 10;

// Log today's special
console.log(menu.todaysSpecial);
