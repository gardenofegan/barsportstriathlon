# barsportstriathlon
A web application used mainly for viewing of historical data, and ideally for live scoring of the Annual Bar Sports Triathlon


***

## Prerequisites
* [Git](http://git-scm.com/)
* [Node](https://nodejs.org/) _with npm_
* [Bower](http://bower.io/)
* [Grunt JS](http://gruntjs.com/)

## Installation (will be updating often in the beginning)
* ``` git clone <repository-url> ``` this repository
* change into the new directory
* ```npm install```
* ```bower install```
* ```grunt```


## Developed Using
* PHP - Using an MVC starter called [Nathan MVC](https://github.com/ndavison/Nathan-MVC)
* CSS Framework - [Foundation](http://foundation.zurb.com/)
* CSS Preprocessor - [SASS](http://sass-lang.com/)
* MySQL
* HTML5
* [Grunt JS] (http://gruntjs.com/)
* [Bower](http://bower.io/)


## Database Concepts
The database needs to be able store and be queried against the following:
* Year of Triathlon
* Person 
* Event (sub-games of bowling, pool, darts)
* Division (old guys or young guys)
* Score (bowling score, win or loss in pool, etc)
* Event Rank (rank in each sub-event)
* Total Rank (final rank across all events in a year)

The following below are ideal, but not necessary for initial phase:
* Comments (by year, and person) (tagging system)
* Pre-event odds (by year and person)
* Blind doubles tracking
