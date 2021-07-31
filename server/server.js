const path = require('path');
const express = require('express');

const app = express();
const PORT = 3000;

// require routers
const apiRouter = require ('./routers/api');
const signupRouter = require('./routers/signup');
const loginRouter = require('./routers/login');


// handle parsing request body
app.use(express.json());
app.use(express.urlencoded({ extended:true }));


// handle requests for static files
app.use(express.static(path.join(__dirname, '../build')));

// define route handlers
app.use('/', apiRouter );
app.use('/signup', signupRouter);
app.use('/login', loginRouter);


// route handler to respond with main app
app.get('/', (req, res) => {
  res.status(200).sendFile(path.join(__dirname, '../client/index.html'));
})


// catch-all route handler for any requests to an unknown route
app.use('*', (req, res) => {
  res.sendStatus(404);
})

// express global error handler
// app.use((err, req, res, next) => {
//   const defaultErr = {
//     log: 'Express error handler caught unknown middleware error',
//     status: 400,
//     message: { err: 'An error occurred' }, 
//   }

//   const errorObj = Object.assign(defaultErr, err);

//   console.log(errorObj.log);

//   res.status(errorObj.status).json(errorObj.message);
// }); 


// start server
 app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});

module.exports = app;