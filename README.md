# Discover Singapore
<img src='images/readme.JPG' style="display:block">
<br>



## Project Summary

### Project Context

Discover Singapore  is a mobile-responsive website with an interactive map that you can  use to discover all famous tourist attractions throughout Singapore while also having the capability to search all the necessities a tourist could need.


### Target Audience

The target audiences are the locals and tourists. that plans to enjoy their vacation or weekends to discover something new or want an application to guide them. 
### The characteristics 
People who are open to new adventures or have fun in their vacation or free time. 

### Organisational Goals

The web application aims  promote beautiful beaches, stunning landscapes, modern city, cultural and culinary delights,with the warmth and hospitality of the Singaporean people.

### User Goals

The users of the web application want to discover singapore and have everything that a tourist needs. the web application allows user to achive this goal by providing location of various tourist attractions it also can provide hotels,malls,restaturans and can search for a specific places the user want while also having the capability to calculate Route service calculates a route between an origin and a destination by using leaflet routing machine. 


### Justification for the App

To discover famous tourist spots, users would currently have to do an internet search which return countless articles and would have missed unknown locations to the user. The articles are wordy, and it can take the users some effort to find the location of different tourist spots The web application provides a convenient way to navigate in singapore on an interactive map and to provide other useful features to aid users to plan a vacation if they would like to.

The live demo to the website can be accessed [here](https://engroliver.github.io/Oliver-Assignment-1/).

## UI/UX

### Strategy

**Organisation**
* Objective: To promote various tourist attractions within Singapore.

**User**
* Objective: To Guide and discover Singapore.

* Needs: An easy way to know the locations of tourist attractions and routing directions to navigate through singapore.

* Demographic: The characteristics (e.g., age, occupation, educational level and IT literacy level) of the users cover a wide spectrum. Any user that is planning to go on a vacation in Singapore and having planing the tourist location and routing is a target audience. Therefore, the web application should be simple to use and intuitive.

* Pain point: People who have never been to singapore and doesn't know what location to search online and would have trouble routing to the location.

User Stories | Acceptance Criteria(s)
------------ | -------------
As a local or tourist interested in visiting Singapore's famous tourist spots, I want to be able to easily locate them. | <ul><li>Search function</li><li>Feature to display location of various tourist attractions</li></ul>
As a person who is lost in the city and have trouble locating he's  geographic location |<ul><li>Feature to show curren location</li></ul>
As a person who's having difficulties in navigating from one place to another in singapore   | <ul><li>Feature to calculates a route between a given origin and destination</li></ul>

### Scope

**Functional Requirements**

Features
* Display tourist attractions layer
* Display hotels layer
* Display malls layer 
* Display Restaurants layer 
* Display pharmacies layer
* Display gas stations layer
* Search for specific locations
* Show current location of user
* calculates a route between a given origin and destination

Content
* Information on the tourist attractions (name, description, and image)
* Location of tourist attractions (achieved by markers on map)

**Non-functional requirements**

* Performance criteria
* Mobile responsiveness

### Structure
<img src="images/structure.JPG" style="display: block">
<br>


### Skeleton
wireframes for mobile and laptop display for the web application

**Mobile**
<img src="images/mobile.png" style="display: block">
<br>

**Laptop**
<img src="images/pc.png" style="display: block">
<br>

### Surface
**Colours**: color scheme is white and red to replicate singapore flag and default bootsrap dark for simplicity 

<img src="images/color.jpg" style="display: block">
<br>

**Font Choice**:  font-family: 'Recursive', sans-serif; are used for its simplicity and perceptibility. 

**Icons and Markers**: markers and icons are selected to contrast the color of the map so the user can easily see the locations.


## Features
Features | Descriptions
-------- | -------------
Display tourist attractions layer | This feature through stored geojson file from data.gov.sg can display  tourist attraction  icons with description,location and image.
Display hotel,restaurant,malls,phamacies and gas layers| This feature through foursquare database can display the icons with name and location of said layers.
Search for places | This feature uses foursqaure database by querying name, category name, taste label, or chain name and displaying it to the map through marker with name and location.
Leaflet Routing Machine | Calculates a route between a given origin and destination


### Limitations and future implementations
Limitations | Future Implementations to Resolve Limitations
----------- | -------------
Routing Machine doesn't display traffic and current location | Create more comprehinsive program with an api that could provide real time traffic data.
Images dosent doesn't directly in markers | Imrpove functions that could extract images from the data


