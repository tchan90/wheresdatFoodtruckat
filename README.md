# Wheres dat Foodtruck at?
'Wheres dat Foodtruck at?' is an app created as a RESTful API project utilising VueJS and writing to a SQLite database. It's main use is to view and search for foodtrucks in Melbourne (names are made up in this project), and allows logged in users to add, edit, and delete trucks.

## Features
### Home Page
Static home page with banner and cards

### Directory Page
Displays all the foodtrucks in the database as cards. User can click on view to display further information about the particular foodtruck. There is also a search feature.

### Favourites Page
User can bookmark the foodtruck as a Favourite and will be stored and displayed in the Favourites section. This links to the Food Truck Card when clicked. Only logged in users can use this feature.

### Food Truck Card
Foodtruck information is displayed here. This includes opening hours, name, about, cuisine, address (which links to Google Maps) and website link. When user is logged in, they can see the 'Add to Favourites' tab in the upper left hand corner of the card and add to the 'Favourites' page. User can remove the favourite by clicking on the tag again. It is impossible to add a foodtruck more than twice. 

### Login and Register
User can log in and register. Once registered or logged in they will be redirected to the 'Admin Page'.

### Admin Page
User can add, edit and delete foodtrucks here. All Foodtrucks added are displayed here. Only logged in users can access this page. 
Enter the following credentials in the login page to test the functions:

`email: test@test.com`

`password: password123`

## Installation
```javascript
cd client
npm install
npm run serve
```
```javascript
cd server
npm install
node src/app.js
```
Alternatively download the production build here: https://github.com/tchan90/wheresdatfoodtruckat-prod and run
```javascript
npm install
npm start
```

## Tech Stack
- VueJS
- Vue Boostrap
- NodeJS
- SQLite  

