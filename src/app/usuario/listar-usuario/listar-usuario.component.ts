import { Component } from '@angular/core';

@Component({
  selector: 'app-listar-usuario',
  template: `
    <h2>Lista de Usuários</h2>
    <ul>
      <li *ngFor="let usuario of usuarios">{{ usuario }}</li>
    </ul>
  `
})
export class ListarUsuarioComponent {
  usuarios = ['Alice', 'Bob', 'Charlie'];
}