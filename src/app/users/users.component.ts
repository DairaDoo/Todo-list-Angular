import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'], // Asegúrate de que sea 'styleUrls' en plural
})
export class UsersComponent implements OnInit {
  users: any[] = [];
  isLoading: boolean = true;

  private apiUrl = 'https://randomuser.me/api/?results=10';

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.fetchUsers();
  }

  fetchUsers(): void {
    this.http.get<any>(this.apiUrl).subscribe({
      next: (data) => {
        this.users = data.results;
        this.isLoading = false;
      },
      error: (err) => {
        console.error('Error fetching users: ', err);
        this.isLoading = false;
      },
    });
  }
}
