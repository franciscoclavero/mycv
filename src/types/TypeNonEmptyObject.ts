export type TypeNonEmptyObject<T> = {
  [K in keyof T]: Required<Pick<T, K>> & Partial<T>;
}[keyof T];
