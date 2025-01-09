import { Component, inject, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {
  userService = inject(UserService);
  users: User[] = [];
  errorMsg: string = "";

ngOnInit(): void {
 
  this.retrieveUsers();
 
  this.userService.userUpdated$.subscribe({
    next: () => this.retrieveUsers()
  })

}
  retrieveUsers(){
    this.userService.getAllUsers().subscribe(
      {
        next: (data) => this.users = data,
        error: (error) => this.errorMsg = error
      }
    )
  }
  deleteUserId(id: string): void{
    if (confirm('Are you sure you want to delete this user?')) {
    this.userService.deleteUser(id).subscribe({
      next: () => {
        this.users = this.users.filter(user => user.id !== id)
      }
    })
  }

  }

  trackByUserId(index: number, user: User){
    return user.id;
  }
}
