import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {UserService} from './user.service';
import {User} from "./user";

@Component({
  selector: 'app-users',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  public users: any = [];
  public user: User;
  public showNew: Boolean = false;
  public submitType: string = 'Save';
  public selectedRow: number;

  constructor(private userService: UserService,
              private router: Router) {
  }

  private loadUsers() {
    this.userService.getUsers().subscribe((users) => {
      this.users = users;
    })
  }

  ngOnInit() {
    this.loadUsers();
  }

  onNew() {
    this.user = new User();
    this.submitType = 'Save';
    this.showNew = true;
  }

  onSave() {
    if (this.submitType === 'Save') {
      this.users.push(this.user);
      this.userService.addUser(this.user);
    } else {
      this.users[this.selectedRow] = this.user;
      this.userService.updateUser(this.user.id,this.user);
    }
    this.showNew = false;
  }

  // This method associate to Edit Button.
  onEdit(index: number) {
    this.selectedRow = index;
    this.user = new User();
    this.user =  UserComponent.assignUser(this.users[this.selectedRow]);
    this.submitType = 'Update';
    this.showNew = true;
  }

  onDeactivate(index: number) {
    this.selectedRow = index;
    (this.users[this.selectedRow].isActif == 0 ) ? this.users[this.selectedRow].isActif = 1 :this.users[this.selectedRow].isActif = 0;
    console.log(this.users[this.selectedRow].idUser);
    this.userService.de_activateUser(this.users[this.selectedRow].idUser).subscribe(res => console.log(res));
  }
  onDeactivateuser() {
    (this.user.isActif == 0 ) ? this.user.isActif = 1 : this.user.isActif = 0;
  }

  onCancel() {
    this.showNew = false;
  }

  private static assignUser(userrow : any){
    let user = new User();
    user.id = userrow.idUser ;
    user.name = userrow.name;
    user.login = userrow.login;
    user.email = userrow.email ;
    user.telephone= userrow.telephone;
    user.password = userrow.password;
    user.DateCreation = userrow.DateCreation;
    user.isActif = userrow.isActif;
    return user;
  }

}
