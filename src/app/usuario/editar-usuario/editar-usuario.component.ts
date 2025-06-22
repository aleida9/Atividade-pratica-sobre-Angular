import { Component } from '@angular/core';

@Component({
  selector: 'app-editar-usuario',
  template: `
    <h2>Editar Usuário</h2>
    <input [(ngModel)]="nome" placeholder="Buscar usuário">
    <button (click)="editarUsuario()">Editar</button>
    <p *ngIf="mensagem">{{ mensagem }}</p>
  `
})
export class EditarUsuarioComponent {
  nome = '';
  mensagem = '';

  editarUsuario() {
    this.mensagem = `Usuário ${this.nome} editado com sucesso!`;
  }
}