# Assignment 1 - ReactJS app.

Name: Elizabeth Neary

## Overview.
My repository contains essential components that are used to build my movie fan website. Components are the building blocks of a user interface and these were used to build different elements and pages for my movie website. There is components for:
-actorCard actorList 
-cardIcons 
-episodeList 
-filterActorsCard filterMoviesCard filterSeriesCard 
-headerActorsList headerMovie headerMovieList headerSerie headerSeriesList 
-movieCard movieDetails movieList movieReview movieReviews 
-reviewForm 
-seasonList 
-serieCard serieDetails seriesList 
-siteHeader 
-spinner 
-templateActorListPage templateMovieListPage templateMoviePage templateSeriePage templateTVSeriesListPage

+ My repo also contains multiple pages used to display all the content from the TMDB APi such as:
-addMovieReviewPage.js 
-favoriteMoviesPage.js 
-favoriteSeriesPage.js 
-homePage.js 
-latestMoviePage.js 
-moviePage.js 
-movieReviewPage.js 
-popularActorPage.js 
-serieHomePage.js 
-seriePage.js 
-upcomingMoviesPage.js

+ It contains contexts such as movieContext and seriesContext for passing data through the component tree without the need to pass props down manually at every level, there is hooks for useMovie and useSeries, an images folder  used to display some images on the website through different ui design frameworks


### Features.
[ A bullet-point list of the __new features__ you added to the Movies Fan app (and any modifications to existing features) .]
 
+ Feature 1
+ Feature 2
+ Feature 3
+ etc
+ etc

## Setup requirements.

I didn't clone my repository as i had already started making changes in my react-movies-lab and wanted to keep going forward using this repo for my CA as a foundation , howver i did create a new branch called moviesAppCA1 that i will use to make all my commits and pushes to for the remainder of the assignment. 

## API endpoints.

+ Discover Latest Movie Available - /movie/latest
+ Search Series List by Series Genre - /genre/tv/list
+ Discover all TV Series Available - /discover/tv
+ Get the images for all the TV Series - /tv/${id}/images
+ Get the details for a TV Series - /tv/${id}
+ Display all the Actors that are Popular right now - /person/popular
+ Get the images of the Actors - /person/${id}/images
+ Search for actors by Actors name - /search/person
+ Display all the seasons the the TV Series - /tv/${id}/season/${seasonNumber}
+ Display all the episodes of the TV Series - /tv/${id}/season/${seasonNumber}/episode/${episodeNumber}


## Routing.

+ Disover a list of TV Series - "/series" 
+ Disover a list of Actors from all your favourite Movies - "/actors" 
+ Displays the Latest movie out - "movies/latest" 
+ Displays all the Series Favourited by User - "/series/favorites"
+ Displays the details of that Series when more info is clicked - "/series/:id"

[If relevant, state what aspects of your app are protected (i.e. require authentication) and what is public.]

## Independent learning (If relevant).
Frameowrks - Bootstrap , Material UI , 