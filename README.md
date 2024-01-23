# Messenger Project created as Assignment for fullstack developer role in AlphaSense Company

## Backend

First of all you need to install dependencies 

### `npm i`

For start backend server you should select directory "backend" and open it in terminal

then you have two scripts 

### `npm run server`

starts server in regular regime

### `npm run server:dev`

starts server in dev regime , 
where all changes that were made in the code are immediately displayed on the server, 
good for development , uses "nodemon".

#### Comments: 
1. (what I would complete or change if I were paid for this work.)

firstly, I would still spend some time setting up the compiler and write the entire backend in typescript

secondly, just in case, I would do more detailed and complex validation on the backend

2. (more details about the architecture and technologies that I chose)

As you can see by analyzing my code, I chose the architecture of the "Mongodb" cloud database, 
and the tool that is used to interact with this database, "mongoose", 
because I think that storing the database in the project itself would be too confusing and mongo 
works just quickly and without huge SQL queries. 

## Frontend 

First of all you need to install dependencies 

### `npm i`

For start UI of application you should select folder "frontend" in your terminal

then you should start 

### `npm start`

Please note that you should use "localhost:3000" for the reason that the "cors" policy
 in the server settings allows only this external access
 
 #### Comments: 
 1. (what I would complete or change if I were paid for this work.)
 
firstly, I would cover all connections with the backend with tests,
  as well as all renders of all list components such as "channel" components
   and renders of "message" components
   
secondly, I would work on the color palette in more details and work on the mobile adaptivity 
   of some windows, and some elements
   
2. (more details about the architecture and technologies that I chose)
  
I used the classic approach of "react" + "typescript" + "redux"
 the usual classic redux.
  I decided to use the usual redux because I don’t have that many elements that need to be put into store,
   and the architecture isn’t that complicated to introduce action creators.
    
For design, I used "Material UI" components and modified them by creating the design system,
 which is located in the DS folder,
  also all reused components and small components are located in "components" folder
  
  
I did a little more than what was required in the technical specifications due
 to the fact that at first I thought like, we will have a user who will write messages.
  Where will we get users from? We need to make users; in order to make users,
   we need to create them somehow; in order to create them,
    I made a registration panel in short and the architecture for this whole thing and the loginPage
     also made for this, plus
      I decided to leave the functionality for deleting channels and messages because 
      I used it and, as it were, also for generating lists.

<sup><sub> *All images contained in this project were found by the author from open sources,
 as far as the author knows, not a single image is require licensing for copyright,
  if the image has and requires licensing for copyright,
   then in any case the image was used in a non-commercial
    product that is not intended to generate profit <sup><sub>






