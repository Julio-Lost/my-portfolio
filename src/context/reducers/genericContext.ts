export interface GenericContext<T, P = any> {
  type: T;
  payload?: P;
}
