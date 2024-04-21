export type TypeNonEmptyObject<T> = {
  [K in keyof T]-?: (Pick<T, K> & Partial<T>) | TypeNonEmptyObject<T>;
}[keyof T];
