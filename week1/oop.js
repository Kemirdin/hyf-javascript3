'use strict';
let space = function () {
  console.log (''); // a program to make spaces in the console
  console.log ('=======================================');
  console.log ('');
};
space ();


 console.log("====================🔥🔥🔥🔥 JavaScript Object-Oriented Programming Class🔥🔥🔥🔥===================");
//first my class Movies//
class Movie {
  constructor(title, director, stars = [], writer = [],  rating = []) {
    
    this.director = director; 
    this.title = title;
    this.stars =stars;
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
    
    this.stars.push(star);
      
  }

  getStars() {
    return `Movie Stars: ${this.star}`;
  }

  addWriter(writer) {
    this.writer.push(writer);
  }

  getWriters() {
    return `Movie writer: ${this.writer}`;
  }

  addRating(rating) {
    this.rating.push(rating);
  }

  getAverageRating() {
           let rateAverage = 0;
           for (let i = 0; i < this.rating.length; i++) {
             rateAverage += this.rating[i];
           }
           return `The Rating: ${rateAverage / this.rating.length}`;
}

//second my class Staff//
class movieStaff {
  constructor(name, role, dateOfBirth) {
     this.name = name;
     this.rol = rol;
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
    return `Rol: ${this.rol}`;
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







const Dominic_Purcell = new StaffMember(...);
const Wentworth_Miller = new StaffMember(...);
const Robert_Knepper = new StaffMember(...);
// adding information for a movie

const PrisonBreak = new Movie('Prison Break');
PrisonBreak.addStar(Dominic_Purcell);
PrisonBreak.addStar(Wentworth_Miller);
PrisonBreak.addStar(Robert_Knepper);
PrisonBreak.addWriter('Nicholas_Wootton')
PrisonBreak.addRating(10);
PrisonBreak.addRating(9.9);
PrisonBreak.addRating(9.8);
PrisonBreak.addRating(9.7);
PrisonBreak.addRating (9.6);








// create and add more staff members
const Writers = PrisonBreak.addWriter('Paul_Scheuring');
// Make sure that the following actions work.
console.log(myMovie.getStars().map(actor => `${actor.getName()} ${actor.getAge()}`));
const director = myMovie.getDirector();
console.log(`Director: ${director.map(director => `${director.getName()}`)}`);