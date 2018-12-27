"use strict";
const config = require("../config");
const log = config.log();
const request = require("superagent");
const service = require("../server/service")(config);
const http = require("http");

const server = http.createServer(service);
server.listen(process.env.PORT || 3010);

server.on("listening", function() {
    log.info(`IRIS-Time is listening on ${server.address().port} in ${service.get("env")} mode.`);

    const announce = () => {
        
        //this is for online
        // request.put(`https://serene-brook-98744.herokuapp.com/service/time/${server.address().port}`, (err, res) => {
        request.put(`http://localhost:5000/service/time/${server.address().port}`, (err) => {
            if (err) {
                log.debug(err);
                log.info("There was an error connectiong to Iris");
                return;
            }
        });
    };
    announce();
    setInterval(announce, 15*1000);

});