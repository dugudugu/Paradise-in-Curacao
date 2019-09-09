<div align="center">
	<a href="https://dugudugu.github.io/Paradise-in-Curacao/">
	<!-- Credits to the following for the image: https://www.easyvoyage.co.uk/weather-forecast/aruba-bonaire-curacao/curacao -->
	<img src="https://img.ev.mu/images/villes/1551/1605x642/1551.jpg"/></a>
</div>

## Introduction

[View web page in GitHub Pages](https://github.com/dugudugu/Paradise-in-Curacao)

## UX

The inspiration for this page can from planning various vacations. When planning a vacation, I can use up to 10 different webpage to search for hotels, car rental and restaurants. The goal for the webpage is to be a one-stop-shop for vacation; in this case I’ll take you to the beautiful Island of Curacao.

### User stories:

- As someone that like to travel, I would like a simple page that is easy to navigate and has everything I would need to plan my vacation
- As someone that is looking for their next vacation: I would like for this page to be attract people into wanting to go to Curacao
- As some that that has already booked there vacation to Curacao, I would like this webpage to give them any information that they’ve missed


### Webframe:

For the webframe I have created two diffrent versions. One for mobile devices (max-width: 768px) and one for larger devices. The idea for the mobile version is to keep everything simple, and minimize the usage of mobile data to load the webpage. 
<div align="center">
	<a href="https://dugudugu.github.io/Paradise-in-Curacao/">
	<h3>Desktop Version (min-width: 768px)</h3>
	<img src="https://github.com/dugudugu/Paradise-in-Curacao/blob/master/images/webframe-pc.jpg"/></a>
</div>

<div align="center">
	<a href="https://dugudugu.github.io/Paradise-in-Curacao/">
	<h3>Mobile Version (max-width: 768px)</h3>
	<img src="https://github.com/dugudugu/Paradise-in-Curacao/blob/master/images/webframe-mobile.jpg"/></a>
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
* Adding google maps marking coorinats from database instead of writing in the JS file

## Technologies used

* For the making of the webframe [InVision App](https://www.invisionapp.com/) has been used
* The workspace used to create this webpage [Cloud9 IDE](https://aws.amazon.com/cloud9/)
* For section, navigation and layout ideas [Material Design for Bootstrap](https://mdbootstrap.com/) was used
* The following languages were used to create this webpage:
	- For the markups[HTML5](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5)
	- For the styling of this webpage[CSS3](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS3)
	- For the Google Maps clusters, marker, info windows and hover over the restaurant list[Java Script](https://www.w3schools.com/js/)
* To change the default font of the webpage [Google Fonts](https://fonts.google.com/) was used
* For the icons [Font Awesome](https://fontawesome.com/) was used
* The core CSS syling and layout was done using [Bootstrap 4](https://getbootstrap.com/)
* To style buttons [CSS Button Generator](https://www.bestcssbuttongenerator.com/) 
* Other technologies used include: [Chrome Dev Tools](https://developers.google.com/web/tools/chrome-devtools/), [Google Maps Platform](https://cloud.google.com/maps-platform/), [YouTube](https://www.youtube.com/) and [Stack Overflow](https://stackoverflow.com/)


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

- Used [HTML Validator](https://validator.w3.org/) to check the markup. The results of this validator were 7 Error and 3 Warnings 
- Used [CSS3 Validator](https://jigsaw.w3.org/css-validator/) to check CSS3 for any errors. "Congratulations! No Error Found. This document validates as CSS level 3 + SVG !"
- Used [JSHint](https://jshint.com/) and [Piliapp](https://www.piliapp.com/javascript-validator/) to validate the JavaScript
- I ran my page on [web.dev](https://web.dev/) and this is the [report](https://lighthouse-dot-webdotdevsite.appspot.com/lh/html?url=https://dugudugu.github.io/Paradise-in-Curacao/)


## Deployment
This project has been build in [Cloud9 IDE](https://aws.amazon.com/cloud9/), committed to Git and than pushed to [GitHub](https://github.com/)
- This site can be deployed at [github](https://github.com/dugudugu/Paradise-in-Curacao).
- There is no difference between the deployed version and the developed version
- Just click on the [link](https://dugudugu.github.io/Paradise-in-Curacao/) to view the web page


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
	- [Just Drive Curacao](https://www.justdrivecuracao.com/)
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

I would also like to thank the following people for the feedback to make the web page better; C. Harms, A. Marchena and anyone else that I might have forgotten. 



#### Disclaimer

The content of this web page is for educational purposes only.
