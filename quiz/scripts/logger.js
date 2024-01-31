// Define a JavaScript function called logMsg() that can be used to log an error message for any object that contains the property errMsg. 
const logger = {
    logMsg: function() {
        if (this.errMsg) {
            console.log(`Error message from : ${this.errMsg}`);
        }
    }
}

const obj1 = {
    errMsg: 'Obj1 error'
}

const obj2 = {
    errMsg: 'Obj2 error'
}

logger.logMsg.call(obj1)
logger.logMsg.call(obj2)
