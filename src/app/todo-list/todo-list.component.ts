import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  tasks: string[] = [];
  newTask: string = '';
  editIndex: number | null = null; // Índice de la tarea que se está editando
  editTask: string = ''; // Valor temporal para la edición

  ngOnInit(): void {
    this.loadTasks();
  }

  addTask(): void {
    if (this.newTask.trim()) {
      this.tasks.push(this.newTask.trim());
      this.newTask = '';
      this.saveTasks();
    }
  }

  removeTask(index: number): void {
    this.tasks.splice(index, 1);
    this.saveTasks();
  }

  startEdit(index: number): void {
    this.editIndex = index; // Guardar el índice de la tarea en edición
    this.editTask = this.tasks[index]; // Guardar el valor original de la tarea
  }

  saveEdit(index: number): void {
    if (this.editTask.trim()) {
      this.tasks[index] = this.editTask.trim(); // Actualizar la tarea
      this.cancelEdit();
      this.saveTasks();
    }
  }

  cancelEdit(): void {
    this.editIndex = null; // Salir del modo de edición
    this.editTask = '';
  }

  private saveTasks(): void {
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }

  private loadTasks(): void {
    const storedTasks = localStorage.getItem('tasks');
    if (storedTasks) {
      this.tasks = JSON.parse(storedTasks);
    }
  }
}
