'use strict';
  <!-- 🔥🔥🔥🔥 JavaScript Object-Oriented Programming Class🔥🔥🔥🔥 -->

//first my class Movies//
class Movie {
  constructor(title, director) {
    
    this.director = director; 
    this.title = title;
    this.stars = [];
    this.writer = [];
    this.rating = [];
    
    
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
class StaffMember {
  constructor(name, role, dateOfBirth) {
     this.name = name;
     this.rol = rol;
    this.dateOfBirth = dateOfBirth;
    this.movie = [];
  }

  addMovie(movie) {
    this.movie.push(movie);
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
const PrisonBreak = new Movie('PrisonBreak');

const Dominic_Purcell = new StaffMember(...);
const Wentworth_Miller = new StaffMember(...);
const Robert_Knepper = new StaffMember(...);
PrisonBreak.addStar(Dominic_Purcell);
PrisonBreak.addStar(Wentworth_Miller);
PrisonBreak.addStar(Robert_Knepper);
// create and add more staff members

// Make sure that the following actions work.
console.log(myMovie.getStars().map(actor => `${actor.getName()} ${actor.getAge()}`));
const director = myMovie.getDirector();
console.log(`Director: ${director.map(director => `${director.getName()}`)}`);