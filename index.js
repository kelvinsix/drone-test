
console.info("Hello world");

const Redis = require('ioredis');
const cache = new Redis();

cache.on('connect', () => {
    console.log('[REDIS] Redis Connected');
    cache.disconnect();
});
cache.on('disconnect', () => {
    console.log('[REDIS] Redis Disconnected');
    process.exit(0);
});
cache.on('error', e => {
    console.log('[REDIS] Redis Error', e);
    process.exit(1);
});
