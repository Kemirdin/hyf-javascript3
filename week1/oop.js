'use strict';

let space = function () {
  console.log (''); // a program to make spaces in the console
  console.log ('====================🔥🔥🔥🔥 JavaScript Object-Oriented Programming Class🔥🔥🔥🔥===================');
  console.log ('');
};
space ();


 
//first my class Movies//
class Movie {
  constructor(title, director, stars = [], writer = [], rating = []) {
    
    this.director = director;
    this.title = title;
    this.stars = stars;
    this.writer = writer;
    this.rating = rating;
    
    
  }

  getTitle() {
        
    return `Movie title: ${this.title}`;
  }
  

  getDirector() {
    
    return `  Movie director: ${this.director}`;
      
  }


  addStar(star) {
    
    this.names.push(star);
      
  }

  getStars() {
    return `Movie Stars: ${this.stars}`;
  }

  addWriter(writer) {
    this.writer.push(writer);
  }

  getWriters() {
    return `Movie writer: ${this.writer}`;
  }

  addRating(num) {
    this.rating.push(num);
  }

  getAverageRating() {
    let rateAverage = 0;
    for (let i = 0; i < this.rating.length; i++) {
      rateAverage += this.rating[i];
    }
    return `The Rating: ${rateAverage / this.rating.length}`;
  }
}
//second my class Staff//

class movieStaff {
  constructor(name, role, dateOfBirth) {
     this.name = name;
     this.role = role;
    this.dateOfBirth = new Date(dateOfBirth);
    this.movie = [];
  }

  addMovie(movieName) {
    this.movie.push(movieName);
  }

  getName() {
    return `Actor: ${this.name}`;
  }

  getRole() {
    return `Role: ${this.role}`;
  }

  getAge() {
    let currentYear = new Date().getFullYear();
    return `Age: ${currentYear - this.birth.getFullYear()}`;
  }
}

// Pick your favorite movie from http://www.imdb.com/
//here i declared new movie PrisonBreak, and the all properties of my movie//



// adding some staff
let Paul_Scheuring = new movieStaff('Paul Scheuring', 'director', 'November 20, 1968');
let Dominic_Purcell = new movieStaff('Dominic Purcell', 'actor', '17 February 1970');
let Robert_Knepper = new movieStaff('Robert Knepper', 'actor', 'July 8, 1959');
let Wentworth_Miller = new movieStaff('Wentworth Miller','actor','June 2, 1972');
let Nicholas_Wootton = new movieStaff('Nicholas Wootton', 'writer', '03/21/1962');






// adding information for a movie

const PrisonBreak = new Movie('Prison Break');
PrisonBreak.addStar(Dominic_Purcell);
PrisonBreak.addStar(Wentworth_Miller);
PrisonBreak.addStar(Robert_Knepper);
PrisonBreak.addWriter(Nicholas_Wootton);
PrisonBreak.addDirector(Paul_Scheuring);
PrisonBreak.addRating(10);
PrisonBreak.addRating(9.9);
PrisonBreak.addRating(9.8);
PrisonBreak.addRating(9.7);
PrisonBreak.addRating (9.6);



// checking the methods

// console.log (PrisonBreak.stars);
// space ();
// console.log (PrisonBreak.getTitle ());
// // console.log (PrisonBreak.getRating ());
// console.log (PrisonBreak.getWriter) ;
// console.log (PrisonBreak.getDirector ());
// space ();


// // checking the Staff methods
// console.log (Robert_Knepper.getName ());
// console.log (Robert_Knepper.getRole ());
// console.log (Robert_Knepper.getAge);
// space ();




console.log(PrisonBreak.getStars().map(actor => `${actor.getName()} ${actor.getAge()}`));
const director = PrisonBreak.getDirector();
console.log(`Director: ${director.map(director => `${director.getName()}`)}`);