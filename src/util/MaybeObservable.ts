import {isObservable, Observable, of} from "rxjs";


export type MaybeObservable<T> = T | Observable<T>;

export function asObservable<T>(value: MaybeObservable<T>) {
  return isObservable(value) ? value : of(value);
}
