import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {UserService} from "../user.service";
import {user} from "@angular/fire/auth";
import {MatButton} from "@angular/material/button";
import { MatInputModule } from '@angular/material/input';
import {MatCard, MatCardContent, MatCardHeader, MatCardTitle} from "@angular/material/card";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  standalone: true,
  imports: [ReactiveFormsModule, MatButton, MatInputModule, MatCard, MatCardHeader, MatCardTitle, MatCardContent],
})
export class LoginComponent {
  userService = inject(UserService)
  fb = inject(FormBuilder);
  http = inject(HttpClient);
  router = inject(Router);

  ngOnInit(): void{
    this.userService.user$.subscribe((user:any) =>{
      if (user){
        this.userService.currentUserSig.set({
          email:user.email!,
          username: user.displayName!,
        })
      } else {
        this.userService.currentUserSig.set(null)
      }
    })
  }



  form = this.fb.nonNullable.group({
    email: ['', Validators.required],
    password: ['', Validators.required],
  });
  errorMessage: string | null = null;

  onSubmit(): void {
    const RawForm = this.form.getRawValue();
    this.userService.login(RawForm.email ,RawForm.password).subscribe({
      next: () => {
        this.router.navigateByUrl('').then();
      },
      error: (err) => {
        this.errorMessage = err.code;
      }
    })
  }

  logout(): void  {
    this.userService.logout()
  }

  protected readonly user = user;
}
