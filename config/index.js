require("dotenv").config();

const bunyan = require("bunyan");

const log = {
    development: function(){
        return bunyan.createLogger({name: "IRIS-time-development", level: "debug"});
    },
    production: function(){
        return bunyan.createLogger({name: "IRIS-time-production", level:"info"});
    },
    test: function(){
        return bunyan.createLogger({name:"IRIS-time-test", level: "fatal"});
    }
};
module.exports = {
    googleApiKey : process.env.GOOGLE_API_KEY,
    log: (env) => {
        if(env) return log[env]();
        return log[process.env.NODE_ENV || "development"]();
    }
};