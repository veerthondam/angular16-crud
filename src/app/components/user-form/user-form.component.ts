import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {
 private fb = inject(FormBuilder);
  private userService = inject(UserService);
  router = inject(Router);
  errorMsg: string = "";
  activatedRoute = inject(ActivatedRoute);
  userId: string | null | undefined;
  isEditable: boolean = false;

  ngOnInit(): void {
    this.userId = this.activatedRoute.snapshot.paramMap.get('id');
   if(this.userId){
    this.isEditable = true;
    this.userService.getUserById(this.userId).subscribe({
      next: (data) => this.userForm.patchValue(data)
    })
   }
  
  }

  userForm: FormGroup = this.fb.group({
    username: ['', [Validators.required]],
    password: ['', [Validators.required, Validators.min(3)]],
    email: ['', [Validators.required, Validators.email]]
  })

  onSubmit(){
    if(this.userForm.valid){
      if(this.isEditable){
       this.userService
       .updateUser(this.userId!, this.userForm.value).subscribe(() => {
        this.router.navigate(['/userlist'])
      })
      }else{
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
}
