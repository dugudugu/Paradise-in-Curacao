<div align="center">
	<a href="https://dugudugu.github.io/Paradise-in-Curacao/">
	<!-- Credits to the following for the image: https://www.easyvoyage.co.uk/weather-forecast/aruba-bonaire-curacao/curacao -->
	<img src="https://img.ev.mu/images/villes/1551/1605x642/1551.jpg"/></a>
</div>

## Introduction

This webpage offer solution to everyone who would like to go to Curacao, is looking for their next vacation destination. You will find almost everyting you need for a nice vacation on the Island on **One Page**. From hotels, to car-rentals and restaurant but don't forget about the activities!. A "One Stop Shop" for your vacation in [Curacao](https://dugudugu.github.io/Paradise-in-Curacao/). 


## UX

The inspiration for this page can from planning various vacations. When planning a vacation, I can use up to 10 different webpage to search for hotels, car rental and restaurants. The goal for the webpage is to be a one-stop-shop for vacation; in this case I’ll take you to the beautiful Island of Curacao.

### User stories:

- As someone that like to travel, I would like a simple page that is easy to navigate and has everything I would need to plan my vacation
- As someone that is looking for their next vacation: I would like for this page to be attract people into wanting to go to Curacao
- As some that that has already booked there vacation to Curacao, I would like this webpage to give them any information that they’ve missed


### Wireframe:

For the webframe I have created two diffrent versions. One for mobile devices (max-width: 768px) and one for larger devices. The idea for the mobile version is to keep everything simple, and minimize the usage of mobile data to load the webpage. 
<div align="center">
	<a href="https://dugudugu.github.io/Paradise-in-Curacao/">
	<h4>Desktop Version (min-width: 768px)</h4>
	<img src="https://github.com/dugudugu/Paradise-in-Curacao/blob/master/assets/wireframes/wireframe-pc.jpg"/></a>
</div>

<div align="center">
	<a href="https://dugudugu.github.io/Paradise-in-Curacao/">
	<h4>Mobile Version (max-width: 768px)</h4>
	<img src="https://github.com/dugudugu/Paradise-in-Curacao/blob/master/assets/wireframes/wireframe-mobile.jpg"/></a>
</div>


## Features

### Existing features

1.	Navbar – Consists of the Paradise in Curacao logo which returns the user to the top of the webpage. There are also links to the “About”, “Hotels”, “Restaurants”, Car Rentals” and “Activities”. The navbar will scroll with the webpage. 
2.	About – The about section includes 5 facts and 4 images of Curacao. With the last two facts, the user is able to click on the title and will be directed to an external webpage with more information about the fact. 
3.	Hotels – Directs the user to the “Hotels” section of the webpage which will display 5 hotels. The first hotel will have a more details information about it and the other 4 will have a short description. The titles of the hotels will be clickable, which will redirect the user to an external page where the user will be able to make a reservation.
4.	Restaurant – Provides the user with a list of restaurants were the user can eat when in Curacao. To give the user an idea where the restaurant is on the island, when the mouse is moved over the list an info window will pop up in a google maps next to the list. The info window will include a “reserve” button where the user can click to make reservations on an external webpage.
5.	Car Rentals – For the car rental section I’ve choose to only show the logo of the car rental. When the user clicks on a logo, the user will be re-directed to an external webpage where he/she can make reservation. 
6.	Activities – The Activities section contains images of different locations on the island. When the user hover over the image, the name of the activity will be shown. The user will be re-directed to an external webpage when clicked on the image.


### Future features

* Linking the ratings from external page to this webpage, for example restaurant ratings according to the reviews
* Adding google maps marking coorinats from database instead of writing in a JSON file
* Add intersection observer to the webpage to improve loading speed
* Reduce image size to lower the ammount op dat usage and improve loading speed
* Add an event to change opacity of the scrollbar when scrolling on mobile devices
* Add an event in the JavaScript so that the markers only shown when you click on a restaurant

## List of technologies used

* InVision
* Cloud9 IDE
* Material Design for Bootstrap
* HTML
* CSS
* JavaScript
* Google Fonts
* Font Awesome
* CSS Button Generator
* Google Maps Platform
* Cloudinary
* Code Validators and Beautifiers: CSS Compressor, Terser REPL, CSS Validator, HTML Validator and Web.dev


## Testing

### Manual Testing

* The links on the navbar were tested to make that the user gets directed to the right section
	- Clicking on “About” sends the user to the about section
	- Clicking on “Hotel” sends the user to the hotel section
	- Clicking on “Restaurant” sends the user to the restaurant section
	- Clicking on “Car Rentals” sends the user to the car rental section
	- Clicking on “Activities” sends the user to the activities section
* The markers on the google maps were also test, info window pops up when clicked on the marker. Also the info window can be closed using the “x” on the top right corner of the info window.
* The web page has been test on responsive on mobile devices


### Online Testing

- Used [HTML Validator](https://www.cssportal.com/html-validator/) to check the markup. The results of this validator were 5 Errors and 3 Warnings.
	- 4 error messages are begin triggered by links of hotels, the validator expected to have digits present after a # sign in the booking.com links
		- I think by replacing the links with an other one, that is correctly written would solve the issue 
	- 1 error message is begin caused by bad value for a crossorigin in the boostrap.min.js script
		- A solution to solve this issue might be removing the crossorigin, but when I did that chrome.dev showed more error. The other option would be to find the propper crossorigin
	- 2 warning messages are being showed for lacking heading in sections of car-cards and place cards
	- 1 warning message is being cause by wrong unnecessary attribute  for JavaScript resources
- Used [CSS Portal](https://www.cssportal.com/css-validator/) to check CSS for any errors. This resulted in 44 Errors and 704 Warning. These error and warning are being caused by bootstrap script
	- For future project try not to use bootstrap as it loads unnecessary styling, these leads to larger cache and can delay loading page time
- Used [JSHint](https://jshint.com/) and [Piliapp](https://www.piliapp.com/javascript-validator/) to validate the JavaScript
- I ran my page on [web.dev](https://web.dev/) and this is the [report](https://lighthouse-dot-webdotdevsite.appspot.com/lh/html?url=https://dugudugu.github.io/Paradise-in-Curacao/)


## Deployment

This project has been build with the help of [Cloud9 IDE](https://aws.amazon.com/cloud9/), Commited to Git and Pushed to GitHub using built in functions within Cloud9.

### Deploy webpage from GitHub

To deploy the webpage from its [GitHub Repository](https://github.com/dugudugu/Paradise-in-Curacao) the following steps should be taken:
	1. Login to Github
	2. Search for the following repository: **dugudufu/Paradise-in-Curacao** and select it
	3. Select the **Setting** button
	4. Scrolldown to **GitHub** Pages section
	5. Under **Source**, select **Master Brach** by clicking on the dropdown menu
	6. Uppon refreshing the page, the repository will be deployed
	7. The deployment link can be found by scroling down to the GitHub Pages

### How to clone the repository from GitHub
This procedure assumes that the developer already created a repository or have an exciting owned by someone else.
	1. On GitHub, navigate to the main page of the repository
	2. Under the repository name, click **Clone or Download**
	3. In the Clone with HTTPs section, copy the clone URL
	4. Open Git Bash
	5. Change the working directory to where the cloned directory should be
	6. Type **git clone**, and then paste the URL
	7. Press **Enter** and the clone will be created


## Credits


#### Content

* The design idea for this page came from [Get Your Guide](https://www.getyourguide.com/)
* The following sources were used for the content of this page:
	- [Booking.com](https://www.booking.com/)
	- [Tripadvisor](http://tripadvisor.com/)
	- [Get to know Curacao](https://mosaictraveler.santabarbararesortcuracao.com/what-is-curacao-10-facts/)
	

#### Media

For the Images of the webpage the following were used:
	- [Booking.com](https://www.booking.com/)
	- [Tripadvisor](http://tripadvisor.com/)
	- [Platina Car Rental](https://www.platinacarrental.com/)
	- [Prins Car Rental](https://www.prinscarrental.com/)
	- [Budget Car Rental](https://www.curacao-budgetcar.com/)
	- [Alamo Car Rental](https://www.alamo-curacao.com/)
	- [DD Car Rental](https://www.ddcarrental.com/)
	- [GH Car Rental](http://www.gh-autoverhuur.nl/)


#### Code

* For the basic JavaScript code the following sources were used:
	- [17 Education, Article By Marimuthu](http://www.17educations.com/trigger-google-map-marker-infowindow/)
	- [StackOverflow, Answer from Geocodezip](https://stackoverflow.com/questions/53436428/marker-clustering-google-maps-api)
	- [Google Maps Platform](https://developers.google.com/maps/documentation/javascript/marker-clustering)
* For the Nabar and footer, the original code was taken from [Material Design for Bootsrap](https://mdbootstrap.com/) and then edited.


### Acknowledgements

Mr. Rahul Lakhanpal, I would like to let you know that I am grateful for your help, motivation and mentoring during this project.

I would also like to thank the following people for the feedback to make the web page better; C. Harms, A. Marchena, the Slack Community and anyone else that I might have forgotten. 



#### Disclaimer

The content of this web page is for educational purposes only.
