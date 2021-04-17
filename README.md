# Mern Travel

### SoftUni course 'React.js' project, to complete the course

This is a project created for the diploma defense of the course **React.js**
of **SoftUni, Bulgaria**.
The application is designed to support and develop the work of the company 'Happy-in-Wild' and covers part of its activities.
**Happy-in-Wild** deals with organizing short-term hikes in the mountains of Bulgaria, for 1, 2, 3 or 4 days, mainly for beginner tourists with low to medium physical training.

---

## Purpose of the application:

1. To advertise the new offers for tours in the mountains, with a detailed description of each tour:

- places to be visited,
- starting date,
- duration (number of days),
- price for 1 person, which includes transport, accommodation, insurance

2. Users can view offers, request participation in a specific tour and pay via PayPal.
3. The site administrators can monitor and approve orders, view and change data of each user, create, update, delete tours.

## Features and functions of the application:

### Each user can without registering:

- to consider the list of all offers for tourist trips
- to search by keyword in the name of the tour
- to see the details of each tour in a separate screen
- to see a description of the company's activity

### For registered users the application offers:

- create an order for a tour with the number of tourists who will participate
- finalize the payment in a few steps using PayPal - finally the order is in the isPaid state.
- the application administrator marks the order as isDelivered as soon as the transport documents, accommodation and insurance will be received by the user
- in one order can be reserved places for more than 1 tour, a total payment amount is finally calculated
- the user can delete some of the elements of his order before starting the payment process
- the user has a profile in which he can change username, email or password.
- in his account the user can see a list of all orders that are made by him and see the order details on a separate screen
- the user can review a specific tour, to rate from 1 to 5, to write a comment about his impressions and experiences

### The application administrator has extended rights:

- can see a list of all registered users
- can change user data
- can create a new tour, change and delete a tour
- can see a list of all tours, divided into pages
- can see a list of all orders
- can mark the order as isDelivered

---

## Creating the application (dev stack):

### MERN-stack and libraries are used to create the application:

1. Express.js and MongoDB (mongoose) to create the server, connection and interaction with the database,

- bcryptjs, jsonwebtoken,
- dotenv, multer, ...

2. React - to create the client part of the application

- react, react-dom, react-router-dom
- axios - Axios is a JavaScript library - promise based HTTP client for the browser and node.js. Axios use APIs to connect resources, exchange data, and access services.
- redux, redux-react, redux-thunk - these libraries together create, organize and manage the state of the application,
- -> Redux itself is a standalone library that can be used with any UI layer or framework, including React.
- -> react-redux is the official Redux UI binding library for React.
- -> redux-thunk: With a plain basic Redux store, you can only do simple synchronous updates by dispatching an action. Middleware redux-thunk extends the store's abilities, and lets you write async logic that interacts with the store.
- bootstrap, react-bootstrap, react-router-bootstrap, moment.js
- react-paypal-button-v2 - An easy to use React button component to implement PayPal's Checkout with Smart Payment Buttons V2
