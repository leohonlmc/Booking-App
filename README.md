# Booking App

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

#Introduction:

The Office Room Booking App is made to make reserving rooms inside an office building easier. Employees may simply reserve meeting rooms, conference rooms, and other places for events like meetings, interviews, training sessions, and more with this app.

In this app, it is considered as a simulator or demo of an internal office booking app,  user auth is not necessary so they can choose their name to start the service.

#Features:

Room Booking: 
Users can book a room by selecting the date, time, and room. They also need to clarify the purpose of making reservations. 

Room Availability: 
Users can view the availability of rooms based on their preferred date and time.

Room Management: 
Users can cancel or modify the booking while admins can manage the room inventory and update room availability. They can also add new rooms and remove existing ones.

User Management: 
Admins have the right to add new users, remove users, and manage user roles.

Notifications: 
Users receive notifications via email, and SMS confirming their room booking and as a reminder for an upcoming event.

Reporting: 
Admins can generate and manage reports based on room usage, booking trends, and so on.

Technology:
The Office Room Booking App is built with React as frontend, Node.js as backend, and MongoDB as the semi-structured database. It also utilizes various third-party services such as AWS S3 for storing user documents and AWS SDK for sending SMS notifications.

Architecture:
The application follows a client-server architecture, where the client side is built using React and communicates with the server side using Axios. The server side is built using Node.js and uses MongoDB for storing data.

#API Documentation:

The following route endpoints are available for interacting with the server side:

Room:
GET /rooms - Returns a list of all rooms.

GET /rooms/:id - Returns details of a specific room.

POST /rooms - Adds a new room to the inventory.

PUT /rooms/:id - Updates details of a specific room.

DELETE /rooms/:id - Deletes a specific room from the inventory.

Booking:
GET /bookings - Returns a list of all bookings.

GET /bookings/:id - Returns details of a specific booking.

POST /bookings - Adds a new booking to the system.

PUT /bookings/:id - Updates details of a specific booking.

DELETE /bookings/:id - Deletes a specific booking from the system.

#Conclusion:

The Office Room renting App is a user-friendly tool created to make renting rooms inside an office building easier. It can assist staff members and administrators in managing their office space more effectively because of its user-friendly design and robust features.
