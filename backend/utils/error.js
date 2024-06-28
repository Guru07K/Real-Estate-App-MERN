class ErrorHandler extends Error{
    constructor(statusCode, message){
        super(message);
        this.statusCode = statusCode;
        Error.captureStackTrace(this, this.constructor);
      }
} 

module.exports = ErrorHandler;


// class ErrorHandler extends Error {
//     constructor(statusCode, message) {
//       super(message); // Pass the message to the parent class (Error)
//       this.statusCode = statusCode;
//     }
//   }
  
//   module.exports = ErrorHandler;


// const errorHandler = (statusCode, message) => {
//     const error = new Error();
//     error.statusCode = statusCode;
//     error.message = message;
//     return error;
//   };

//   module.exports = errorHandler;