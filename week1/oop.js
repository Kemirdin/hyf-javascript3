'use strict';
  <!-- 🔥🔥🔥🔥 JavaScript Object-Oriented Programming Class🔥🔥🔥🔥 -->


class Movie {
  constructor(title, director) {
    
    this.director = director; 
    this.title = title;
    this.stars = [];
    this.writer = [];
    this.rating = [];
    
    
  }

    getTitle() {
        
      return this.title = title;
    }
  

  getDirector() {
    
    return this.director = director; 
      
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
    this.rating.push(rating);
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
    this.dateOfBirth = dateOfBirth;
    this.movie = [];
  }

  addMovie(movie) {
    this.movie.push(movie);
  }

  getName() {
    return this.name;
  }

  getRole() {
    return this.role;
  }

  getAge() {
    return this.age;
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