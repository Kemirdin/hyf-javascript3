'use strict';

class Movie {
  constructor(title, director) {
    
    this.director = director; 
    this.title = title;
    this.stars = [];
    this.writer = [];
    this.rating = [];
    
    
  }

    getTitle() {
        
        return this.title
    }
  

  getDirector() {
    
    return this.director  
      
  }

  addStar(star) {
    
    this.stars.push(star);
      
  }

  getStars() {
    return this.stars;
  }

  addWriter(writer) {
    this.writer.push(writer);
  }

  getWriters() {
    return this.writer;
  }

  addRating(rating) {
    this.rating.push(writer);
  }

  getAverageRating() {
           let rateAverage = 0;
           for (let i = 0; i < this.rating.length; i++) {
             rateAverage += this.rating[i];
           }
           return `The Rating: ${rateAverage / this.rating.length}`;
}

class StaffMember {
  constructor(name, role, dateOfBirth) {
     this.name = name;
     this.rol = rol;
     this.birth = new Date(birth);
  }

  addMovie(movie) {
    // add your code here
  }

  getName() {
    // add your code here
  }

  getRole() {
    // add your code here
  }

  getAge() {
    // add your code here
  }
}

// Pick your favorite movie from http://www.imdb.com/

const myMovie = new Movie(...);

const firstActor = new StaffMember(...);
myMovie.addStar(firstActor);
// create and add more staff members

// Make sure that the following actions work.
console.log(myMovie.getStars().map(actor => `${actor.getName()} ${actor.getAge()}`));
const director = myMovie.getDirector();
console.log(`Director: ${director.map(director => `${director.getName()}`)}`);