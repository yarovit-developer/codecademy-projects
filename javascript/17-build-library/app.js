// Create the Media class
class Media {
// Create an empty constructor
  constructor(title) {
    this._title = title;
    this._isCheckedOut = false;
    this._ratings = [];
  }

  // Getters for title, isCheckedOut and ratings
  get title() {
    return this._title;
  }

  get isCheckedOut() {
    return this._isCheckedOut;
  }

  get ratings() {
    return this._ratings;
  }

 // Setter for isCheckedOut
  set isCheckedOut(value) {
    this._isCheckedOut = value;
  }

  toggleCheckOutStatus() {
    this._isCheckedOut = !this._isCheckedOut;
  }

  getAverageRating() {
    let ratingsSum = this.ratings.reduce(
       (accumulator, rating) => accumulator + rating, 0); // Добавлено начальное значение 0
     return ratingsSum / this.ratings.length;
  }

  addRating(value) {
    this.ratings.push(value);
  }
}

// Creating a Book class that extends Media
class Book extends Media {
  // Constructor for initializing properties
  constructor(title, author, pages) {
    super(title); 
// Call the constructor of the parent class with the title argument
    this._author = author;
    this._pages = pages;
  }

  get author() {
    return this._author;
  }

  get pages() {
    return this._pages;
  }
} 

class Movie extends Media {
// Constructor for initializing properties
  constructor(title, director, runTime) {
    super(title); 
    this._director = director;
    this._runTime = runTime;
  }


  get director() {
    return this._director;
  }

  get runTime() {
    return this._runTime;
  }
} 

// Create a Book instance
const historyOfEverything = new Book('A Short History of Nearly Everything', 'Bill Bryson', 544);


historyOfEverything.toggleCheckOutStatus();


console.log(historyOfEverything.isCheckedOut);

historyOfEverything.addRating(4);
historyOfEverything.addRating(5);
historyOfEverything.addRating(5);


console.log(historyOfEverything.getAverageRating());



const speed = new Movie('Jan de Bont', 'Speed', 116);


speed.toggleCheckOutStatus();


console.log(speed.isCheckedOut);


speed.addRating(1);
speed.addRating(1);
speed.addRating(5);


console.log(speed.getAverageRating());
