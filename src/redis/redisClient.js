import {config} from "../../config/dev";

const redis = require ('redis');

const client = redis.createClient({
    port: config.REDIS_PORT,
    host: config.REDIS_HOST
});

client.on('connect',()=>{
    console.log("Connected to Redis server");
})
module.exports = client;