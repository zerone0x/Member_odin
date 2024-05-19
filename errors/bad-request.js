const CustomAPIError = require("./custom-api");
const { StatusCodes } = require('http-status-codes');

class BadRequestError extends CustomAPIError{
    constructor(msg){
        super(msg)
        this.statusCode = StatusCode.BAD_REQUEST
    }
}

module.exports = BadRequestError