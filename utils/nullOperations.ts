type Maybe<T> = T | undefined;

export const isDefined = <T>(x: Maybe<T>): x is T => {
  return x !== undefined && x !== null;
};

export const isUndefined = <T>(x: Maybe<T>): x is undefined => {
  return x === undefined || x === null;
};

export const getOrElse = <T>(x: Maybe<T>, defaultValue: T): T => {
  return isDefined(x) ? x : defaultValue;
};
