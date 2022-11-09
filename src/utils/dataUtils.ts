import { isObject, isArray, mapKeys, mapValues, camelCase } from "lodash";

const mapper = (value: string, transformCase: Function) =>
  isObject(value) ? toAnyCase(value, transformCase) : value;

const toAnyCase: any = (data: any, transformCase: Function) => {
  const _mapValues = (value: string) => mapper(value, transformCase);
  if (isArray(data)) {
    return data.map(mapValues);
  } else if (isObject(data) || data === null) {
    return mapKeys(mapValues(data, _mapValues), (value, key) =>
      transformCase(key)
    );
  } else {
    return data;
  }
};

const toCamelCase = (data: any) => toAnyCase(data, camelCase);

export default {
  toCamelCase,
};
