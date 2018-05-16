const Cinema = function (films) {
  this.films = films;
};

Cinema.prototype.getListOfTitles = function () {
  return films.map(film => film.title);
};

Cinema.prototype.findFilm = function (title) {
  
  return films.filter(film = film.title = title);
};

module.exports = Cinema;
