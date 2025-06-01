import redis from "../clients/redis.client";

export function setRedisKey(key: string, value: any) {
  return redis.set(key, JSON.stringify(value), {
    EX: 120,
  });
}
export function getRedisKey(key: string) {
  return redis.get(key).then((data) => {
    if (data) {
      return JSON.parse(data);
    }
    return null;
  });
}

export function deleteRedisKey(key: string) {
  return redis.del(key);
}

export function rPushRedisKey(key: string, value: any) {
  return redis.rpush(key, JSON.stringify(value));
}

export function expireRedisKey(key: string, seconds: number) {
  return redis.expire(key, seconds);
}

export function llenRedisKey(key: string) {
  return redis.llen(key);
}

export function lRangeRedisKey(key: string, start: number, end: number) {
  return redis.lRange(key, start, end);
}
