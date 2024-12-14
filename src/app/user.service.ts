import {inject, Injectable, signal} from '@angular/core';
import {Auth, signInWithEmailAndPassword, signOut, user} from '@angular/fire/auth';
import {from, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class UserService {
  firebaseAuth = inject(Auth)
  user$ = user(this.firebaseAuth)
  currentUserSig = signal<UserInterface | null | undefined>(undefined)


  login(email:string, password:string){
    console.log(email, password)
    const promise = signInWithEmailAndPassword(
      this.firebaseAuth,
      email
      ,password).then(()=>{})
    return from(promise)
  }

  logout():Observable<void>{
    const promise = this.firebaseAuth.signOut().then(() =>{})
    return from(promise)
  }
}

export interface UserInterface{
  email: string;
  username: string;

}
