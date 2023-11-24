# Assignment 1 - ReactJS app.

Name: Elizabeth Neary

## Overview.
My repository contains essential components that are used to build my movie web application. Components are the building blocks of a user interface and these were used to build different elements and pages for my movie website. The components i have for building my website are:

- actorCard, actorDetails, actorList 
- cardIcons 
- filterActorsCard, filterMoviesCard, filterSeriesCard 
- headerActor, headerActorsList, 
- headerLatest, headerMovie, headerMovieList 
- headerSerie, headerSeriesList 
- latestMovieComponent 
- movieCard, movieDetails, movieList, movieReview, movieReviews 
- pageCarousel 
- paginationComponent 
- reviewForm, reviewSerieForm 
- serieCard, serieDetails, serieReview, seriesList, seriesReviews 
- siteHeader 
- spinner 
- templateActorListPage, templateActorPage 
- templateMovieListPage, templateMoviePage 
- templateSeriePage, templateTVSeriesListPage

My repo also contains multiple pages used to display all the content from the TMDB APi such as:

- **actorPage.js:** _This page is to display the details and all the information about the choosen actor._
- **addMovieReviewPage.js:** _This presents a form to the user allow them to write a review and rate movies from their movie favourites._
- **addSerieReviewPage.js:** _This presents a form to the user allow them to write a review and rate TV Sows from their TV Series favourites._
- **favoriteMoviesPage.js:** _This page displays all the Movies that the user has liked and added to their favorites page._
- **favoriteSeriesPage.js:** _This page displays all the TV Shows that the user has liked and added to their TV Series favorites page._
- **homePage.js:** _This page is the main page that displays all the movies currently out and available to watch to users._
- **moviePage.js:** _This page is to display the details and all the information about the movie._ 
- **movieReviewPage.js:** _This is where users can see reviews written by other users about the movie._
- **popularActorPage.js:** _This displays a list of popular actor currently at the moment._
- **serieHomePage.js:** _This displays all the current TV Shows that are available to watch._
- **seriePage.js:** _This page is to display the details and all the information about the TV Show._
- **serieReviewPage.js:** _This is where users can see reviews written by other users about the show._ 
- **upcomingMoviesPage.js:** _This page displays all the new Upcoming Movies currently available from TMDB._
- **watchlistMoviesPage.js:** _This is the page where users can view the Upcoming movies they have added to their Watchlist._

It contains contexts such as movieContext and seriesContext for passing data through the component tree without the need to pass props down manually at every level, there is hooks for useMovie and useSeries, an images folder  used to display some images on the website through different ui design frameworks.


### Features.
 
+ **Search for Actors**
    - Implemented a search functionality for actors that allows users to filter actors based on their names with error and exception handling.

 + **Search for TV Shows**
    - Implemented a search functionality for TV Series Home Page that allows users to filter TV Shows based on the series title name.

+ **New Navigation Bar**
    - Created a new Navigation Bar using MaterialUI framework with a drop down menu to display all the titles without cluttering.
    - It has a responsive design that caters to both desktop and mobile versions for successful naviagtion.

+ **Pagination**
    - I added Pagination element from MaterialUI to all my pages including TV Series and Popular Actors. It also handles error handling when users exceeds page limit giving them an option to return to main page.

+ **Adding to Watchlist and Removing from Watchlist**
    - Implemented a function for users to add movies to their Watchlist from the Upcoming Movies page. A new delete icon was used from CoreUI framework and this icon allows the user to remove the movie from their Watchlist.

+ **Picture Carousel**
    - I used a carousel template from React Bootstrap framework to display movie images on all my pages , just to add as a design element to my movie app that was visual.

## Setup requirements.

I didn't clone my repository as i had already started making changes in my react-movies-lab and wanted to keep going forward using this repo for my CA as a foundation , however i did create a new branch called moviesAppCA1 that i will use to make all my commits and pushes to for the remainder of the assignment. In the future for proper practice I will clone my repsoitory and create a new repo for committing my changes.

## API endpoints.
Here is a list of the API points that i have used throught my application. I did try to implement the TV Seasons and TV Episodes into my MovieDetails Page but I was unable to figure out the correct the correct api point because i was confused with its HTML Structure. However all other endpoints shown are utilised within my movies app:

+ _Disocover the Most Recent Movie Releases -_ **/discover/movie**
+ _Discover Movies that are Upcoming and available to watch soon -_ **/movie/upcoming**
+ _Get the images for all the Movies -_ **/movie/${id}**
+ _Search Movies List by Movie Genre - _**/genre/movie/list**
+ _Get the images for all the Movies -_ **/movie/${id}**
+ _Get the Movie reviews to display for each movie when review button is clicked -_ **/movie/${id}/reviews**
+ _Get the Movie reviews to display for each movie when review button is clicked -_ **/tv/${id}/reviews**

+ _Discover Latest Movie Available -_ **/movie/latest**
+ _Search Series List by Series Genre -_ **/genre/tv/list**
+ _Discover all TV Series Available -_ **/discover/tv**
+ _Get the images for all the TV Series -_ **/tv/${id}/images**
+ _Get the details for a TV Series -_ **/tv/${id}**
+ _Display all the Actors that are Popular right now -_ **/person/popular**
+ _Get the images of the Actors -_ **/person/${id}/images**
+ _Search for actors by Actors name -_ **/search/person**
+ _Get the details of the Actors such as name and overview of life -_ **/person/${id}**

+ _Display all the seasons the the TV Series -_ **/tv/${id}/season/${seasonNumber}**
+ _Display all the episodes of the TV Series -_ **/tv/${id}/season/${seasonNumber}/episode/${episodeNumber}**


## Routing.
Here i have included all my routing elements including movies and the new routes that have been added to the application.

+ **"/reviews/form" -** _This will direct the user to the ReviewsForm Page to write a review about the selected movie._
+ **"/series/reviews/form" -** _This will direct the user to the SeriesReviewsForm Page to write a review about the selected TV Show._
+ **"/series/reviews/:id" -** _When review button is clicked, reviews are presented and when the user clicks on full review they are directed to the SeriesReviewPage that displays the full review from that user._
+ **"/movies/favorites" -** _This will direct user to the FavoritesMoviePage where their list of favorites will be displayed._
+ **"/series"  -** _This is the link for the SeriesHomePage that display all the TV Shows._
+ **"/actors" -** _This is the link for the ActorPage that will display the most popular actors._
+ **"/series/favorites" -** _This will direct the user to the favoriteSeriesPage where their list of TV Show favorites are displayed._
+ **"/series/:id" -** _This link will direct the user to the TV Shows details Page when more info is clicked. _
+ **"/movies/:id" -** _This link will direct the user to the Movies details Page when more info is clicked._
+ **"/actors/:id" -** _This link will direct the user to the Actors details Page when more info is clicked._
+ **"/reviews/:id" -** _When review button is clicked, reviews are presented and when the user clicks on full review they are directed to the MovieReviewPage that displays the full review from that user._
+ **"/movies/upcoming" -** _This link directs the user to the Upcoming Movies Page._
+ **"/movies/upcoming/watchlist" -** _This link will direct the user to the Watchlist Page that will display the list of upcoming movies they have added to their watchlist._



## Independent learning (If relevant).
In my Movies Application I did incorporate different frameworks into my project such as React-Bootstrap, MaterialUI and CoreUI. I used MaterialUI for the majority of my assigmnet using it for material icons such as search and text fields , menuItems , formControl and layouts that were used throughout my compinents and pages. I used React-Bootstrap to implement my Picture Carousel that contains a slideshow for my movie images that can allow the user to click forward or wait for the slideshow to change. React is also used fo rthe spinner within the applicatin for when pages or content is loading. The Picture Carousel was a nice feature that was visually effective for a movie app. I used CoreUI to design my latestMovie Card component that allowed me to display my movie image and content the way i wanted and could implement a See more or See less option if the latest movie Overview is too long which increased the card size and pushed the MoviesList. This way the card stays the same size and when See more is displayed as an option for user to read more. 
