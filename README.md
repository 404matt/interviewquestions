# Interview Coding Problems

### Task1
    1. cd into the task1 folder
    2. run docker-compose up
    3. task1 should now be running on port 8081

### Task2
Task 2 is combined with Task 3 as per the extra credits
The frontend is in react using mui to display random cat facts from the https://catfact.ninja api.
It also communicated with the backend to display artworks that depict cats from the art insitute chicago api
### Task3
I am using the art intitute chicago free api to populate the database with 25 different pieces of artwork that depict cats. It should show the name of the art, artist name, image of the art, and when it was painted
Steps to run
    1. run docker-compose up
    2. wait for db to load
    3. wait for backend to load and populate db
    4. by this point react frontend should be running on port :3000 and can be viewed

### What can be improved
    1. For sake of time i did not implement .env variables, meaning this is only suitable as a development enviroment, as the security credentials are visible
    2. I did not create tests in the backend or frontend. Since the frontend was generated via nx, there is jest integrations to get tests quickly up and running

### Known problems
    1. I am not checking for the database to be connected to the backend before populating, i'm simply sleeping for 10. This is not a good practice, but for sake of time I went with this approach. 
    2. If using vs code to develop the frontend, npm install should be ran since i am using a dedicated volume for node_modules. An other approach would be to run in a DevContainer.
    3. if the Database needs to be debuged, I included PGAdmin in the containers

### Thanks!
    Thank you for reviewing my coding task, have a good day!