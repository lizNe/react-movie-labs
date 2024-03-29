import { filterByGenre, filterByTitle } from "../support/e2e";


let movies; // List of Discover movies from TMDB

describe("Filtering", () => {
  before(() => {
    // Get movies from TMDB and store them locally.
    cy.request(
      `https://api.themoviedb.org/3/discover/movie?api_key=${Cypress.env(
        "TMDB_KEY"
      )}&language=en-US&include_adult=false&include_video=false&page=1`
    )
      .its("body")
      .then((response) => {
        movies = response.results;
      });
  });
  beforeEach(() => {
    cy.visit("/");
  });

  describe("By movie title", () => {
    it("only display movies with 'm' in the title", () => {
      const searchString = "m";
      const matchingMovies = filterByTitle(movies, searchString);
      cy.get("#filled-search").clear().type(searchString); // Enter m in text box
      cy.get(".MuiCardHeader-content").should(
        "have.length",
        matchingMovies.length
      );
      cy.get(".MuiCardHeader-content").each(($card, index) => {
        cy.wrap($card).find("p").contains(matchingMovies[index].title);
      });
    });
    it("handles case when there are no matches", () => {
      const searchString = "xyxxzyyzz";
      cy.get("#filled-search").clear().type(searchString); // Enter m in text box
      cy.get(".MuiCardHeader-content").should("have.length", 0);
    });
  });

  describe("By movie genre", () => {
    it("show movies with the selected genre", () => {
      const selectedGenreId = 18;
      const selectedGenreText = "Drama";
      const matchingMovies = filterByGenre(movies, selectedGenreId);
      cy.get("#genre-select").click();
      cy.get("li").contains(selectedGenreText).click();
      cy.get(".MuiCardHeader-content").should("have.length", matchingMovies.length);
      cy.get(".MuiCardHeader-content").each(($card, index) => {
        cy.wrap($card).find("p").contains(matchingMovies[index].title);
      });
    });
    
  });

  describe("Combined genre and title", () => {
    // Define your test case for combined genre and title filter
    it("displays movies with the selected genre and 'm' in the title", () => {
      // Define your selected genre and title filter criteria
      const selectedGenreId = 18; // Example: Drama genre
      const selectedGenreText = "Drama"; // Example: Genre text
      const titleSearchString = "m"; // Example: Title filter with 'm'
  
      // Filter movies by genre and title
      const genreFilteredMovies = filterByGenre(movies, selectedGenreId);
      const titleFilteredMovies = filterByTitle(movies, titleSearchString);
      const combinedFilteredMovies = movies.filter((movie) => {
        return (
          genreFilteredMovies.some((gm) => gm.id === movie.id) &&
          titleFilteredMovies.some((tm) => tm.id === movie.id)
        );
      });
  
      // Perform actions in the UI
      cy.get("#genre-select").click();
      cy.get("li").contains(selectedGenreText).click();
      cy.get("#filled-search").clear().type(titleSearchString);
  
      // Assertions
      cy.get(".MuiCardHeader-content").should("have.length", combinedFilteredMovies.length);
      cy.get(".MuiCardHeader-content").each(($card, index) => {
        cy.wrap($card).find("p").contains(combinedFilteredMovies[index].title);
      });
    });
  });
  


});