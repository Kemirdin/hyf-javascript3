'use strict';

var space = function () {
  console.log (""); // a program to make spaces in the console
  console.log ("==================== 🔥🔥🔥🔥 JavaScript Object-Oriented Programming Class🔥🔥🔥🔥 ===================");
  console.log ("");
}
space ();


 
//first my class Movies//
class Movie {
  constructor(FilmTitle, director) {
    
    this.director = director;
    this.FilmTitle = title;
    this.stars = [];
    this.writers = [];
    this.ratings = [];
    
    
  }

  getTitle() {
        
    return this.FilmTitle;
  }
  

  getDirector() {
    
    return `  Movie director: ${this.director}`;
      
  }


  addStars(star) {
    
    this.stars.push(star);
      
  }

  getStars() {
    return this.stars;
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

class MovieStaff {
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
    return `Age: ${currentYear - this.dateOfBirth.getFullYear()}`;
  }
}

// Pick your favorite movie from http://www.imdb.com/
//here i declared new movie PrisonBreak, and the all properties of my movie//



// adding some staff
let Paul_Scheuring = new MovieStaff('Paul Scheuring', 'director', 'November 20, 1968');
let Dominic_Purcell = new MovieStaff('Dominic Purcell', 'actor', '17 February 1970');
let Robert_Knepper = new MovieStaff('Robert Knepper', 'actor', 'July 8, 1959');
let Wentworth_Miller = new MovieStaff('Wentworth Miller','actor','June 2, 1972');
let Nicholas_Wootton = new MovieStaff('Nicholas Wootton', 'writer', '03/21/1962');
Paul_Scheuring.addMovie('Prison Break');
Dominic_Purcell.addMovie('Prison Break');
Robert_Knepper.addMovie('Prison Break');
Wentworth_Miller.addMovie('Prison Break');
Nicholas_Wootton.addMovie('Prison Break');





// adding information for a movie

const PrisonBreak = new Movie('Prison Break');
PrisonBreak.addStars(Dominic_Purcell);
PrisonBreak.addStars(Wentworth_Miller);
PrisonBreak.addStars(Robert_Knepper);
PrisonBreak.addWriter(Nicholas_Wootton);
// PrisonBreak.addDirector(Paul_Scheuring);
PrisonBreak.addRating(10);
PrisonBreak.addRating(9.9);
PrisonBreak.addRating(9.8);
PrisonBreak.addRating(9.7);
PrisonBreak.addRating (9.6);



//checking the methods

console.log (PrisonBreak.getStars());
space ();
console.log (PrisonBreak.getTitle ());
 console.log (PrisonBreak.getAverageRating());
console.log (PrisonBreak.getWriters()) ;
console.log (PrisonBreak.getDirector ());
space ();


// checking the Staff methods
console.log (Robert_Knepper.getName ());
console.log (Robert_Knepper.getRole ());
console.log (Robert_Knepper.getAge());
space ();

console.log (
  PrisonBreak.getStars ().map (
    actor => `${actor.getName ()} ${actor.getAge ()}`
  )
);


// checking the requests

/*




console.log(PrisonBreak.getStars().map(actor => `${actor.getName()} ${actor.getAge}`))
const director = PrisonBreak.getDirector();
console.log(`Director: ${director.map(dir => `${dir.getName()}`)}`);





*/