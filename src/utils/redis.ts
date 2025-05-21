import redis from "../clients/redis.client";

export function setRedisKey(key: string, value: any) {
  return redis.set(key, JSON.stringify(value), {
    EX: 36000,
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
