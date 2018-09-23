# ReconnectCity Backend

This is a Node.js and Express backend built for Fuelbag web app.

## Features
* Users can create a student account


### Usage
* Run 
```bash
npm start
```
 to start the application.
* Connect to the API on port 3000.

There are X routes:

- /                        | GET  |        - homepage
- /api/student/create      | POST |        - return {studentId: studentId}
- /api/student/:id/spend   | POST |        - send { mentorId: mentorId, fuelSpent: {Number} } 
                                           - return {studentId: studentId}


- /api/montor           | GET  |      - get all mentors

The server is using a MongoDB database in mLab.
