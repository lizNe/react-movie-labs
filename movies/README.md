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

+ My repo also contains multiple pages used to display all the content from the TMDB APi such as:

-actorPage.js - This page is to display the details and all the information about the choosen actor.
-addMovieReviewPage.js - This presents a form to the user allow them to write a review and rate movies from their movie favourites.
-addSerieReviewPage.js - This presents a form to the user allow them to write a review and rate TV Sows from their TV Series favourites.
-favoriteMoviesPage.js - This page displays all the Movies that the user has liked and added to their favorites page.
-favoriteSeriesPage.js - This page displays all the TV Shows that the user has liked and added to their TV Series favorites page.
-homePage.js - This page is the main page that displays all the movies currently out and available to watch to users.
-moviePage.js - This page is to display the details and all the information about the movie. 
-movieReviewPage.js - This is where users can see reviews written by other users about the movie.
-popularActorPage.js - This displays a list of popular actor currently at the moment.
-serieHomePage.js - This displays all the current TV Shows that are available to watch
-seriePage.js - This page is to display the details and all the information about the TV Show. 
-serieReviewPage.js - This is where users can see reviews written by other users about the show. 
-upcomingMoviesPage.js - This page displays all the new Upcoming Movies currently available from TMDB.
-watchlistMoviesPage.js - This is the page where users can view the Upcoming movies they have added to their Watchlist.

+ It contains contexts such as movieContext and seriesContext for passing data through the component tree without the need to pass props down manually at every level, there is hooks for useMovie and useSeries, an images folder  used to display some images on the website through different ui design frameworks.


### Features.
[ A bullet-point list of the __new features__ you added to the Movies Fan app (and any modifications to existing features) .]
 
+ Search for Actors
    -Implemented a search functionality for actors that allows users to filter actors based on their names with error and exception handling.

+ New Navigation Bar
    -Created a new Navigation Bar using MaterialUI framework with a drop down menu to display all the titles without cluttering.
    -It has a responsive design that caters to both desktop and mobile versions for successful naviagtion.

+ Pagination
    -I added Pagination element from MaterialUI to all my pages including TV Series and Popular Actors. It also handles error handling when users exceeds page limit giving them an option to return to main page.

+ Adding to Watchlist and Removing from Watchlist
    - Implemented a function for users to add movies to their Watchlist from the Upcoming Movies page. A new delete icon was used from CoreUI framework and this icon allows the user to remove the movie from their Watchlist.

+ Picture Carousel
    - I used a carousel template from React Bootstrap framework to display movie images on all my pages , just to add as a design element to my movie app that was visual.

## Setup requirements.

I didn't clone my repository as i had already started making changes in my react-movies-lab and wanted to keep going forward using this repo for my CA as a foundation , however i did create a new branch called moviesAppCA1 that i will use to make all my commits and pushes to for the remainder of the assignment. In the future for proper practice I will clone my repsoitory and create a new repo for committing my changes.

## API endpoints.
Here is a list of the API points that i have used throught my application. I did try to implement the TV Seasons and TV Episodes into my MovieDetails Page but I was unable to figure out the correct the correct api point because i was confused with its HTML Structure. However all other endpoints shown are utilised within my movies app:

+ Disocover the Most Recent Movie Releases - /discover/movie
+ Discover Movies that are Upcoming and available to watch soon - /movie/upcoming
+ Get the images for all the Movies - /movie/${id}
+ Search Movies List by Movie Genre - /genre/movie/list
+ Get the images for all the Movies - /movie/${id}
+ Get the Movie reviews to display for each movie when review button is clicked - /movie/${id}/reviews
+  Get the Movie reviews to display for each movie when review button is clicked - /tv/${id}/reviews

+ Discover Latest Movie Available - /movie/latest
+ Search Series List by Series Genre - /genre/tv/list
+ Discover all TV Series Available - /discover/tv
+ Get the images for all the TV Series - /tv/${id}/images
+ Get the details for a TV Series - /tv/${id}
+ Display all the Actors that are Popular right now - /person/popular
+ Get the images of the Actors - /person/${id}/images
+ Search for actors by Actors name - /search/person
+ Get the details of the Actors such as name and overview of life - /person/${id}

+ Display all the seasons the the TV Series - /tv/${id}/season/${seasonNumber}
+ Display all the episodes of the TV Series - /tv/${id}/season/${seasonNumber}/episode/${episodeNumber}


## Routing.
Here i have included all my routing elements including movies and the new routes that have been added to the application.

+ "/reviews/form" - This will direct the user to the ReviewsForm Page to write a review about the selected movie.
+ "/series/reviews/form" - This will direct the user to the SeriesReviewsForm Page to write a review about the selected TV Show.
+ "/series/reviews/:id" - When review button is clicked, reviews are presented and when the user clicks on full review they are directed to the SeriesReviewPage that displays the full review from that user. 
+ "/movies/favorites" - This will direct user to the FavoritesMoviePage where their list of favorites will be displayed.
+ "/series"  - This is the link for the SeriesHomePage that display all the TV Shows.
+ "/actors" - This is the link for the ActorPage that will display the most popular actors.
+ "/series/favorites" - This will direct the user to the favoriteSeriesPage where their list of TV Show favorites are displayed.
+ "/series/:id" - This link will direct the user to the TV Shows details Page when more info is clicked. 
+ "/movies/:id" - This link will direct the user to the Movies details Page when more info is clicked.
+ "/actors/:id" - This link will direct the user to the Actors details Page when more info is clicked.
+ "/reviews/:id" - When review button is clicked, reviews are presented and when the user clicks on full review they are directed to the MovieReviewPage that displays the full review from that user.
+ "/movies/upcoming" - This link directs the user to the Upcoming Movies Page.
+ "/movies/upcoming/watchlist" - This link will direct the user to the Watchlist Page that will display the list of upcoming movies they have added to their watchlist.



## Independent learning (If relevant).
In my Movies Application I did incorporate different frameworks into my project such as React-Bootstrap, MaterialUI and CoreUI. I used MaterialUI for the majority of my assigmnet using it for material icons such as search and text fields , menuItems , formControl and layouts that were used throughout my compinents and pages. I used React-Bootstrap to implement my Picture Carousel that contains a slideshow for my movie images that can allow the user to click forward or wait for the slideshow to change. React is also used fo rthe spinner within the applicatin for when pages or content is loading. The Picture Carousel was a nice feature that was visually effective for a movie app. I used CoreUI to design my latestMovie Card component that allowed me to display my movie image and content the way i wanted and could implement a See more or See less option if the latest movie Overview is too long which increased the card size and pushed the MoviesList. This way the card stays the same size and when See more is displayed as an option for user to read more. 
