const Cinema = function (films) {
  this.films = films;
};

// Cinema.prototype.getFilmTitles = function(films){
//   const result = films.map((film) => {
//     return film.title
//   });
//   return result
// }



    Cinema.prototype.getFilmByTitle = function(title){
        return this.films.find((film) => film.title === title);

    }

    Cinema.prototype.getFilmsByGenre = function(genre){
      const result = this.films.filter((film) => {
          return film.genre === genre;
      })
      return result
    }

    Cinema.prototype.checkIfFilmHasYear = function(year){
      const result = this.films.some((film) => {
        return film.year === year
      })
      return result
    }

    Cinema.prototype.checkIfAllFilmsOverLength = function(length){
      const result = this.films.every((film) => {
        return film.length >= length;
      })
      return result
    }

    Cinema.prototype.TotalRunningTimeAllFilms = function(){
      const total = this.films.reduce((runningTotal, film) =>{
        return runningTotal + film.length
      }, 0)
      return total
    }

    

module.exports = Cinema;
