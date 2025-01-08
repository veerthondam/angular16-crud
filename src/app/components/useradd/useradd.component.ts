import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-useradd',
  templateUrl: './useradd.component.html',
  styleUrls: ['./useradd.component.css']
})
export class UseraddComponent {

  private fb = inject(FormBuilder);
  private userService = inject(UserService);
  router = inject(Router);
  errorMsg: string = "";

  userForm: FormGroup = this.fb.group({
    username: ['', [Validators.required]],
    password: ['', [Validators.required, Validators.min(3)]],
    email: ['', [Validators.required, Validators.email]]
  })

  onSubmit(){
    if(this.userForm.valid){
     this.userService.createUser(this.userForm.value).subscribe(
      {
        next: (createUser) => {
          this.router.navigate(['/userlist']);
        },
        error: (error) => this.errorMsg
      }
     )
    }
  }
}
