-Create a repository
-Initialize the repository
-node_modules , package.json,package-lock.json
-Install express
-Create a server
-Listen to port 7777
-Write request handlers for /test , /hello
-Install nodemon and update scripts inside package.json
-what are dependencies
-what is the use of "-g" while npm install
-difference between caret and tilda (^ vs ~) 



-initialize git
-.gitgitignore
-create a remote repo on github
-push all code to remote origin
-play with routes and route extensions ex ./hello , / , hello/2 ,/xyz
-Order of the routes matter a lot
-Install Postman app and make a workspace/collection -> test API call
-Write logic to handle GET , POST ,PATCH,DELETE API calls and test them on Postman
-explore routing and use of ? , + , () , * in the routes
-Use of regrex in routes /a/ , /.*fly$/
-Reading the query params in the routes
-Reading the dynamic routes



-Multiple Route Handlers -Play with the code
-next()
-next function and errors along with res.send()
-app.use("/route" ,rH ,[rH2,rH3],rH4,rH5)
-What is a Middleware ?why do we need it
-How express JS basically handles requests behind the scenes
-Difference between app.use() and app.all()
-Write dummy auth middleware for admin
-Write a dummy auth middleware for all user routes , except /user/login
-Error Handling using app.use("/" , (err,req,res,next) = {});


-Go to mongoDB website
-Create a free cluster
-Create a user
-Get the connection string
-Install mongo db compass
-Create a database
-Install mongodb package
-Craete a connection rom code
-documents CRUD - Create , Read , Update and Delete


-Create a free cluster on mongoDB official website (Mongo Atlas)
-Install mongoose library
-Connect your application to the database "Connection-url"/devTinder
-Call the connectDB function and connect to database before starting application on 7777
-Create a userSchema & user Model
-Create /signup API to add data to database
-Push some documents using API calls from postman
-Error Hnadling using try , catch


-Difference between JSON and JavaScript
-Add the express.json middleware to your app
-Make your signup API dynamic to receive data from the end user