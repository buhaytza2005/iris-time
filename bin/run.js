'use strict';
const request = require("superagent");
const service = require('../server/service');
const http = require('http');

const server = http.createServer(service);
server.listen(process.env.PORT || 3010);

server.on('listening', function() {
    console.log(`IRIS-Time is listening on ${server.address().port} in ${service.get('env')} mode.`);

    const announce = () => {
        request.put(`https://serene-brook-98744.herokuapp.com/service/time/${server.address().port}`, (err, res) => {
            if (err) {
                //console.log(err);
                console.log("There was an error connectiong to Iris");
                console.log(`Just tried connecting to https://serene-brook-98744.herokuapp.com/service/time/${server.address().port}`)
                return;
            }
            console.log(res.body);
        })
    }
    announce();
    setInterval(announce, 15*1000);

});