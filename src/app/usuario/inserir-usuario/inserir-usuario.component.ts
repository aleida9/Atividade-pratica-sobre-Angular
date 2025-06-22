import { Component } from '@angular/core';

@Component({
  selector: 'app-inserir-usuario',
  template: `
    <h2>Inserir Usuário</h2>
    <input [(ngModel)]="nome" placeholder="Nome do usuário">
    <button (click)="adicionarUsuario()">Adicionar</button>
    <p *ngIf="mensagem">{{ mensagem }}</p>
  `
})
export class InserirUsuarioComponent {
  nome = '';
  mensagem = '';

  adicionarUsuario() {
    this.mensagem = `Usuário ${this.nome} adicionado com sucesso!`;
    this.nome = '';
  }
}