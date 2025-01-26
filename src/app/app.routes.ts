import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { UsersComponent } from './users/users.component';

export const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'todo', component: TodoListComponent },
  { path: 'admin', component: UsersComponent },
];
