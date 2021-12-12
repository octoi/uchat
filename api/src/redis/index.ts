import redis from 'redis';
import { log } from '../utils/log';

const REDIS_URL = process.env.REDIS_URL;
const REDIS_HOST = process.env.REDIS_HOST;

export const client = REDIS_HOST
  ? redis.createClient({ host: REDIS_HOST })
  : REDIS_URL
  ? redis.createClient({ url: REDIS_URL })
  : redis.createClient();

client.on('connect', () => {
  log.success('CONNECTED TO REDIS 📂');
});

client.on('error', () => {
  log.error('DISCONNECTED FROM REDIS');
});
